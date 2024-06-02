"use client";
import { saveEditorContent } from "@/lib/actions/editor.actions";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ contentEditor, setCount, tokens }) => {
  const [content, setContent] = useState(contentEditor.saved);
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
  };

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
