export interface LinkProps {
  children: React.ReactNode;
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
