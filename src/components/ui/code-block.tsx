import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({
  code,
  language,
}: {
  code: string;
  language: "typescript" | "javascript" | "json" | "html";
}) => {
  return (
    <div className="rounded-2xl overflow-hidden border">
      <div className="text-sm overflow-x-auto py-0 -my-3">
        <SyntaxHighlighter
          language={language}
          style={gruvboxDark}
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
