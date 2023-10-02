import ReactMarkdown from "react-markdown";

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <article className="prose lg:prose-lg">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default MarkdownContent;
