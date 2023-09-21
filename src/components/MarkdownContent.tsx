import { Suspense, lazy } from "react";

const ReactMarkdown = lazy(() => import("react-markdown"));

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <article className="prose lg:prose-xl">
      <Suspense fallback="">
        <ReactMarkdown children={content} />
      </Suspense>
    </article>
  );
};

export default MarkdownContent;
