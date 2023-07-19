import { HexColor } from "@yext/studio";
import { formatDate } from "../utils/formatDate";

export interface DateProps {
  date?: string;
  textColor?: HexColor;
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

export const initialProps: DateProps = {
  date: "2023-06-01",
  textColor: "#000000",
  fontWeight: "normal",
  textSize: "base",
};

const Date = ({ date, textColor, fontWeight, textSize }: DateProps) => {
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
      {formatDate(date)}
    </span>
  );
};

export default Date;
