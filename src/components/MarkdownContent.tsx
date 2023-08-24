import { Markdown } from "@yext/react-components";
import React from "react";

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <article className="prose lg:prose-xl">
      <Markdown content={content} />
    </article>
  );
};

export default MarkdownContent;
