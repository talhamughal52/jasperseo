"use client";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [content, setContent] = useState();
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

  useEffect(() => {
    console.log(content);
  }, [content]);
  return (
    <ReactQuill
      modules={modules}
      placeholder="Write Blog Here"
      formats={formats}
      theme="snow"
      style={{ height: "75vh", width: "69%" }}
      value={content}
      onChange={setContent}
      className="dark:text-white"
    />
  );
};

export default TextEditor;
