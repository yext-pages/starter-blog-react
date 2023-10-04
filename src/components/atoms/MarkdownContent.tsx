import ReactMarkdown from "react-markdown";

interface MarkdownContentProps {
  /**
   * @displayName Content
   * @tooltip Controls the markdown content to display
   */
  content: string;
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <article className="prose">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default MarkdownContent;
