import "../ArticleContainer.css";

export interface ArticleContainerProps {
  children: React.ReactNode;
}

const ArticleContainer = ({ children }: ArticleContainerProps) => {
  return (
    <div className="prose lg:prose-lg mx-auto my-8 max-w-2xl px-2 lg:px-0">
      {children}
    </div>
  );
};

export default ArticleContainer;
