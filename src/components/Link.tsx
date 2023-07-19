import { HexColor } from "@yext/studio";

export interface LinkProps {
  children: React.ReactNode;
  url: string;
  tailwindClasses: string;
  textColor?: HexColor;
}

const Link = ({ children, url, tailwindClasses, textColor }: LinkProps) => {
  return (
    <a href={url} className={tailwindClasses} style={{ color: textColor }}>
      {children}
    </a>
  );
};

export default Link;
