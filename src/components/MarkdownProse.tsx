import React from "react";
import clsx from "clsx";
import { Markdown } from "@yext/react-components";

interface MarkdownProseProps {
  content: {
    markdown: string;
  };
  className?: string;
}

const MarkdownProse = ({ content, className }: MarkdownProseProps) => {
  return (
    <div className={clsx(className, "prose dark:prose-invert")}>
      <Markdown content={content.markdown} />
    </div>
  );
};

export default MarkdownProse;
