"use client";
import { useState } from "react";
import TextEditor from "./TextEditor";
import TextEditorLeftSide from "./TextEditorLeftSide";

const ContentEditorWrapper = ({ response }) => {
  const [count, setCount] = useState({
    h1Count: 0,
    h2Count: 0,
    h3Count: 0,
    h4Count: 0,
    h5Count: 0,
    h6Count: 0,
    imageCount: 0,
    wordCount: 0,
    paragraphCount: 0,
  });

  const [tokens, setTokens] = useState(response.nlp_tokens);
  const [percentage, setPercentage] = useState(0);

  return (
    <>
      <TextEditor
        contentEditor={response.contentEditor}
        setCount={setCount}
        tokens={tokens}
        setTokens={setTokens}
        structure={response.structure}
        setPercentage={setPercentage}
      />
      <TextEditorLeftSide
        contentEditor={response.contentEditor}
        structure={response.structure}
        importantTopics={response.importantTopics}
        nlp_tokens={tokens}
        outline={response.outline}
        websites={response.websites}
        topwebsites={response.topwebsites}
        count={count}
        percentage={percentage}
      />
    </>
  );
};

export default ContentEditorWrapper;
