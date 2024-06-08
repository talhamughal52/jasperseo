"use server";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import ContentEditor from "@/lib/database/models/contentEditor.model";
import TopWebsite from "@/lib/database/models/topWebsite.model";
import { auth } from "@clerk/nextjs";
import { checkUserBalance, getUserById } from "./user.actions";
import { revalidatePath } from "next/cache";
import { createTopWebsite } from "./topWebsite.actions";
import { updateUserBillingDetial } from "./billing.actions";

export async function createEditor(contentEdiorFormData) {
  try {
    const { userId } = auth();
    await connectToDatabase();
    const user = await getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const userBalance = await checkUserBalance(user._id);
    if (!userBalance.totalEditors) {
      return JSON.parse(JSON.stringify(false));
    }
    const contentEditorFormRawData = {
      keyword: contentEdiorFormData.get("keyword"),
      country: contentEdiorFormData.get("country"),
      countryCode: contentEdiorFormData.get("countryCode"),
      user: user._id,
      status: "start",
    };
    const newContentEditor = await ContentEditor.create(
      contentEditorFormRawData
    );
    if (!newContentEditor) {
      throw new Error("Content Editor Not Created !");
    }
    const updateedBillingDetial = {
      usedEditors: 1,
    };
    await updateUserBillingDetial(user._id, updateedBillingDetial);
    await setupInitialEditor(newContentEditor);
    revalidatePath("/editor");
    return JSON.parse(JSON.stringify(true));
  } catch (error) {
    handleError(error);
  }
}

export const setupInitialEditor = async (newContentEditor) => {
  try {
    const payload = {
      query: newContentEditor.keyword,
      region: `${newContentEditor.countryCode} -en`,
    };
    const response = await fetch(
      `${process.env.JASPER_SEO_API_URL}/generalInfo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    if (response.ok) {
      const result = await response.json();
      const nlp = JSON.stringify(result[0].nlp);
      newContentEditor.status = "ready";
      newContentEditor.nlp = nlp;
      await newContentEditor.save();
      const urls = result[0].urls;
      urls.map(async (url, index) => {
        let topWebsite = null;
        if (index < 5) {
          topWebsite = {
            url: url,
            status: "start",
            checked: true,
            contentEdior: newContentEditor._id,
          };
        } else {
          topWebsite = {
            url: url,
            status: "start",
            contentEdior: newContentEditor._id,
          };
        }
        await createTopWebsite(topWebsite);
      });
    } else {
      newContentEditor.status = "error";
      await newContentEditor.save();
    }
  } catch (error) {
    newContentEditor.status = "error";
    await newContentEditor.save();
  }
};

export async function getUserEditors() {
  try {
    const { userId } = auth();
    await connectToDatabase();
    const user = await getUserById(userId);
    const userContentEditors = await ContentEditor.find({
      user: user._id,
    });
    return JSON.parse(JSON.stringify(userContentEditors));
  } catch (error) {
    handleError(error);
  }
}

export async function getEditorById(editorId) {
  try {
    await connectToDatabase();

    const contentEditor = await ContentEditor.findOne({ _id: editorId });

    if (!contentEditor) throw new Error("Content Editor not found");

    if (contentEditor.status == "error" || contentEditor.status == "start") {
      await setupInitialEditor(contentEditor);
    }
    return JSON.parse(JSON.stringify(contentEditor));
  } catch (error) {
    handleError(error);
  }
}

export async function setupEditorById(contentEditor) {
  try {
    await connectToDatabase();

    const topWebsites = await TopWebsite.find({
      contentEdior: contentEditor._id,
      checked: true,
      status: { $in: ["start", "error"] },
    });

    if (!topWebsites) throw new Error("Content Editor not found");

    for (let i = 0; i < topWebsites.length; i++) {
      // if (i === 1) {
      //   break;
      // }
      const payload = {
        unique_keywords: JSON.parse(contentEditor.nlp),
        url: topWebsites[i].url,
        query: contentEditor.keyword,
      };
      const response = await fetch(
        `${process.env.JASPER_SEO_API_URL}/website`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.ok) {
        const result = await response.json();
        const content = JSON.stringify(result);
        topWebsites[i].content = content;
        topWebsites[i].status = "complete";
        await topWebsites[i].save();
      } else {
        topWebsites[i].status = "error";
        await topWebsites[i].save();
      }
    }

    revalidatePath(`/editor/${contentEditor._id}/loading`);
    revalidatePath(`/editor/${contentEditor._id}`);

    return JSON.parse(JSON.stringify(topWebsites));
  } catch (error) {
    handleError(error);
  }
}

export async function getReadyEditorById(editorId) {
  try {
    await connectToDatabase();

    const contentEditor = await ContentEditor.findOne({ _id: editorId });

    if (!contentEditor) throw new Error("Content Editor not found");

    let websites = await TopWebsite.find({
      status: "complete",
      checked: true,
      contentEdior: contentEditor._id,
    });

    let topwebsites = await TopWebsite.find({
      contentEdior: contentEditor._id,
    }).sort({ checked: -1 });

    if (websites.length == 0) {
      await TopWebsite.updateMany(
        {
          status: "complete",
          contentEdior: contentEditor._id,
        },
        { $set: { checked: true } }
      );
      websites = await TopWebsite.find({
        status: "complete",
        checked: true,
        contentEdior: contentEditor._id,
      });
    }

    let h2 = [];
    let h3 = [];
    let h4 = [];
    let h5 = [];
    let h6 = [];
    let img = [];
    let paras = [];
    let word_count = [];
    let terms = [];

    websites.forEach((website) => {
      const content = JSON.parse(website.content);
      h2.push(content[content.length - 1].heading2.length);
      h3.push(content[content.length - 1].heading3.length);
      h4.push(content[content.length - 1].heading4.length);
      h5.push(content[content.length - 1].heading5.length);
      h6.push(content[content.length - 1].heading6.length);
      img.push(content[content.length - 1].imgs);
      paras.push(content[content.length - 1].para);
      word_count.push(content[content.length - 1].words);

      for (let i = 0; i < content.length - 1; i++) {
        terms.push({
          name: content[i][0] || "",
          examples: content[i][1].example || "",
          isheading: content[i][1].isheading || "",
        });
      }
    });

    let outline = "";

    let main = terms.slice(0, 1);
    terms = terms.slice(1);

    terms.sort((a, b) => b.examples.length - a.examples.length);

    // Sort based on isheading
    terms.sort((a, b) => {
      if (a.isheading && !b.isheading) {
        return -1;
      } else if (!a.isheading && b.isheading) {
        return 1;
      }
      return 0;
    });

    // Filter array by removing items without examples
    terms = terms.filter((item) => item.examples.length > 0);
    terms.unshift(main[0]);

    let mergedArray = {};
    terms.forEach((item) => {
      const name = item.name;
      if (!mergedArray[name]) {
        mergedArray[name] = item;
      } else {
        mergedArray[name].examples = [
          ...mergedArray[name].examples,
          ...item.examples,
        ];
      }
    });

    mergedArray = Object.values(mergedArray);

    let wordCounts = {};
    mergedArray.forEach((item) => {
      const words = item.name.split(" ");
      words.forEach((word) => {
        if (!wordCounts[word]) {
          wordCounts[word] = 1;
        } else {
          wordCounts[word]++;
        }
      });
    });

    let repeatedWords = [];
    // Extract the repeated words
    for (const word in wordCounts) {
      if (wordCounts[word] > 1) {
        repeatedWords.push(word);
      }
    }
    let importantTopics = [...new Set(repeatedWords)];

    let structure = {};
    structure["h1"] = { max: 1, min: 1 };
    structure["h2"] = {
      max: Math.max(...h2),
      min: Math.floor(h2.reduce((acc, val) => acc + val, 0) / h2.length),
    };
    structure["h3"] = {
      max: Math.max(...h3),
      min: Math.floor(h3.reduce((acc, val) => acc + val, 0) / h3.length),
    };
    structure["h4"] = {
      max: Math.max(...h4),
      min: Math.floor(h4.reduce((acc, val) => acc + val, 0) / h4.length),
    };
    structure["h5"] = {
      max: Math.max(...h5),
      min: Math.floor(h5.reduce((acc, val) => acc + val, 0) / h5.length),
    };
    structure["h6"] = {
      max: Math.max(...h6),
      min: Math.floor(h6.reduce((acc, val) => acc + val, 0) / h6.length),
    };
    structure["images"] = {
      max: Math.max(...img),
      min: Math.floor(img.reduce((acc, val) => acc + val, 0) / img.length),
    };
    structure["paragraph"] = {
      max: Math.max(...paras),
      min: Math.floor(paras.reduce((acc, val) => acc + val, 0) / paras.length),
    };
    structure["word"] = {
      max: Math.max(...word_count),
      min: Math.floor(
        word_count.reduce((acc, val) => acc + val, 0) / word_count.length
      ),
    };

    let nlp_tokens = [];

    mergedArray.forEach((nlp_token) => {
      nlp_tokens.push({
        name: nlp_token.name,
        max: nlp_token.examples.length + 1,
        min: Math.floor(nlp_token.examples.length / 2) + 1,
        current: 0,
        examples: nlp_token.examples,
        heading: nlp_token.isheading,
      });
    });

    importantTopics = Array.from(new Set(repeatedWords)).slice(0, 10);

    const response = JSON.stringify({
      structure,
      websites,
      nlp_tokens,
      importantTopics,
      contentEditor,
      outline,
      topwebsites,
    });
    return JSON.parse(response);
  } catch (error) {
    handleError(error);
  }
}

export const handlecompatitorsChange = async (compatitors) => {
  try {
    await connectToDatabase();
    const websites = compatitors.getAll("websites");
    const contentEditor = compatitors.get("contentEditor");

    await TopWebsite.updateMany(
      { contentEdior: contentEditor },
      { $set: { checked: 0 } }
    );

    for (let i = 0; i < websites.length; i++) {
      await TopWebsite.updateOne(
        { _id: websites[i] },
        { $set: { checked: true } }
      );
    }

    revalidatePath(`/editor/${contentEditor}/loading`);
    revalidatePath(`/editor/${contentEditor}`);

    const response = JSON.stringify({ true: true });
    return JSON.parse(response);
  } catch (error) {
    handleError(error);
  }
};

export const saveEditorContent = async (id, content) => {
  try {
    await connectToDatabase();
    await ContentEditor.updateOne({ _id: id }, { $set: { saved: content } });
    revalidatePath(`/editor/${id}/loading`);
    revalidatePath(`/editor/${id}`);
    const response = JSON.stringify({ true: true });
    return JSON.parse(response);
  } catch (error) {
    handleError(error);
  }
};
