export interface LinkProps {
  children: React.ReactNode;
  /**
   * @displayName URL
   * @tooltip Controls the URL the link should redirect to
   */
  url: string;
}

const Link = ({ children, url }: LinkProps) => {
  return (
    <a href={url} className="hover:underline">
      {children}
    </a>
  );
};

export default Link;
