import { HexColor } from "@yext/studio";

export interface SnippetProps {
  text: string;
  textColor: HexColor;
  textSize: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  fontWeight:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
}

export const initialProps: SnippetProps = {
  text: "Snippet",
  textColor: "#000000",
  textSize: "base",
  fontWeight: "normal",
};

const Snippet = ({ text, textColor, fontWeight, textSize }: SnippetProps) => {
  const weightVariants = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  };

  const sizeVariants = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  return (
    <span
      className={`${sizeVariants[textSize]} ${weightVariants[fontWeight]}`}
      style={{ color: textColor }}
    >
      {text}
    </span>
  );
};

export default Snippet;
