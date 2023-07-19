import { HexColor } from "@yext/studio";
import classNames from "classnames";

export interface ParagraphProps {
  value?: string;
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
  textColor?: HexColor;
  hiddenOnMobile?: boolean;
}

export const initialProps: ParagraphProps = {
  value: "Paragraph",
  textSize: "base",
  fontWeight: "normal",
  textColor: "#000000",
  hiddenOnMobile: false,
};

const Paragraph = ({
  value,
  textSize,
  fontWeight,
  textColor,
  hiddenOnMobile,
}: ParagraphProps) => {
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
    <p
      aria-labelledby="information-heading"
      className={classNames(
        `${sizeVariants[textSize]} ${weightVariants[fontWeight]}`,
        { "hidden md:block": hiddenOnMobile }
      )}
      style={{ color: textColor }}
    >
      {value}
    </p>
  );
};

export default Paragraph;
