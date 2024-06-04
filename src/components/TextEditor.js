"use client";
import { saveEditorContent } from "@/lib/actions/editor.actions";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({
  contentEditor,
  setCount,
  tokens,
  setTokens,
  structure,
  setPercentage,
}) => {
  // const [content, setContent] = useState(contentEditor.saved);
  const [content, setContent] = useState("");
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ indent: "-1" }, { indent: "+1" }],
      //   ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const tagsAnalysis = (editorContent) => {
    let h1Tags = editorContent.match(/<h1[^>]*>/gi);
    let h1Count = h1Tags ? h1Tags.length : 0;
    let h2Tags = editorContent.match(/<h2[^>]*>/gi);
    let h2Count = h2Tags ? h2Tags.length : 0;
    let h3Tags = editorContent.match(/<h3[^>]*>/gi);
    let h3Count = h3Tags ? h3Tags.length : 0;
    let h4Tags = editorContent.match(/<h4[^>]*>/gi);
    let h4Count = h4Tags ? h4Tags.length : 0;
    let h5Tags = editorContent.match(/<h5[^>]*>/gi);
    let h5Count = h5Tags ? h5Tags.length : 0;
    let h6Tags = editorContent.match(/<h6[^>]*>/gi);
    let h6Count = h6Tags ? h6Tags.length : 0;
    // Count images
    let imageTags = editorContent.match(/<img[^>]*>/gi);
    let imageCount = imageTags ? imageTags.length : 0;
    // Count words
    let wordCount = editorContent.trim().split(/\s+/).length;
    // Count paragraphs
    let paragraphCount =
      editorContent.replace(/<\/p>/gi, "").split(/<p[^>]*>/gi).length - 1;
    const count = {
      h1Count,
      h2Count,
      h3Count,
      h4Count,
      h5Count,
      h6Count,
      imageCount,
      wordCount,
      paragraphCount,
    };
    setCount(count);
    let total_completed = 0;
    for (let i = 0; i < tokens.length; i++) {
      let keyword = tokens[i].name;
      let tokenRegex = new RegExp(keyword, "gi");
      let tokenMatches = editorContent.match(tokenRegex);
      if (tokenMatches) {
        updateTokens((prevTokens) => {
          const updatedTokens = [...prevTokens];
          updatedTokens[i] = {
            ...updatedTokens[i],
            current: tokenMatches.length,
          };
          return updatedTokens;
        });
        total_completed++;
      } else {
        updateTokens((prevTokens) => {
          const updatedTokens = [...prevTokens];
          updatedTokens[i] = { ...updatedTokens[i], current: 0 };
          return updatedTokens;
        });
      }
    }
    total_completed = Math.floor((total_completed / tokens.length) * 33);
    let headingsScore = 0;
    let lines = editorContent.split("\n");
    let firstLine = lines[0];
    let tempElement = document.createElement("div");
    tempElement.innerHTML = firstLine;
    let isFirstLineH1 =
      tempElement.firstChild &&
      tempElement.firstChild.nodeName.toLowerCase() === "h1";
    let containsKeyword = firstLine.includes(contentEditor.keyword);
    if (isFirstLineH1 && containsKeyword) {
      headingsScore += 20;
    } else if (isFirstLineH1) {
      headingsScore += 5;
    }
    if (h2Count >= structure.h2.min) {
      headingsScore += 2;
    }
    if (h3Count >= structure.h3.min) {
      headingsScore += 2;
    }
    if (h4Count >= structure.h4.min) {
      headingsScore += 2;
    }
    if (h5Count >= structure.h5.min) {
      headingsScore += 2;
    }
    if (h6Count >= structure.h6.min) {
      headingsScore += 2;
    }
    let wordsScore = 0;
    if (wordCount >= structure.word.min) {
      wordsScore += 11;
    }
    if (imageCount >= structure.images.min) {
      wordsScore += 11;
    }
    if (paragraphCount >= structure.paragraph.min) {
      wordsScore += 11;
    }
    let total = wordsScore + headingsScore + total_completed;
    setPercentage(total);
  };

  useEffect(() => {
    let editorContent = contentEditor.saved ? contentEditor.saved : "";
    tagsAnalysis(editorContent);
    setContent(editorContent);
  }, []);

  let timer = null;
  const handleChange = (value) => {
    let editorContent = value ? value : "";
    tagsAnalysis(editorContent);
    setContent(editorContent);
    clearTimeout(timer);
    timer = setTimeout(() => {
      saveEditorContent(contentEditor._id, value);
    }, 3000);
  };

  const updateTokens = (updater) => {
    setTokens((prevTokens) => updater(prevTokens));
  };

  return (
    <ReactQuill
      modules={modules}
      placeholder="Write Blog Here"
      formats={formats}
      theme="snow"
      style={{ height: "90vh", width: "69%" }}
      value={content}
      onChange={handleChange}
      className="dark:text-white"
    />
  );
};

export default TextEditor;
