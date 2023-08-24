export interface ArticleContainerProps {
  children: React.ReactNode;
}

const ArticleContainer = ({ children }: ArticleContainerProps) => {
  return (
    <div className="prose mx-auto my-8 max-w-2xl px-2 lg:prose-lg lg:px-0">
      {children}
    </div>
  );
};

export default ArticleContainer;
