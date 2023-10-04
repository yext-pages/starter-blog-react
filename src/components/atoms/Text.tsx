import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const textVariants = cva("font-sans", {
  variants: {
    color: {
      Black: "text-black",
      "Dark Gray": "text-gray-900",
      Gray: "text-gray-600",
      "Light Gray": "text-gray-400",
      White: "text-white",
      Blue: "text-blue-700",
      "Dark Blue": "text-blue-900",
    },
    size: {
      L: "text-lg leading-normal",
      M: "text-base leading-normal",
      S: "text-sm leading-normal",
      XS: "text-xs leading-normal",
    },
    weight: {
      Bold: "font-bold",
      "Semi Bold": "font-semibold",
      Regular: "font-regular",
      Light: "font-light",
    },
    align: {
      Left: "text-left",
      Center: "text-center",
      Right: "text-right",
    },
    italic: {
      Yes: "italic",
      No: "",
    },
    uppercase: {
      Yes: "uppercase",
      No: "",
    },
    maxLines: {
      "1": "line-clamp-1",
      "2": "line-clamp-2",
      "3": "line-clamp-3",
      "4": "line-clamp-4",
      "5": "line-clamp-5",
      None: "line-clamp-none",
    },
  },
});

export interface TextProps {
  /**
   * @displayName Text
   * @tooltip Controls the text to display
   */
  text?: string;
  /**
   * @displayName Size
   * @tooltip Controls the font size of the text
   */
  size?: "XS" | "S" | "M" | "L";
  /**
   * @displayName Weight
   * @tooltip Controls the font weight of the text
   */
  weight?: "Light" | "Regular" | "Semi Bold" | "Bold";
  /**
   * @displayName Alignment
   * @tooltip Controls the alignment of the text
   */
  align?: "Left" | "Center" | "Right";
  /**
   * @displayName Italic
   * @tooltip Controls whether the font is italic
   */
  italic?: "Yes" | "No";
  /**
   * @displayName Uppercase
   * @tooltip Controls whether the font is uppercase
   */
  uppercase?: "Yes" | "No";
  /**
   * @displayName Color
   * @tooltip Controls the color of the text
   */
  color?:
    | "White"
    | "Black"
    | "Dark Gray"
    | "Gray"
    | "Light Gray"
    | "Blue"
    | "Dark Blue";
  /**
   * @displayName Max Lines
   * @tooltip Controls the number of lines of text shown before truncation
   **/
  maxLines?: "1" | "2" | "3" | "4" | "5" | "None";
}

export const initialProps: TextProps = {
  text: "Text goes here",
  size: "M",
  weight: "Regular",
  align: "Left",
  italic: "No",
  uppercase: "No",
  color: "Dark Gray",
  maxLines: "None",
};

const Text = ({
  text,
  size,
  weight,
  align,
  italic,
  uppercase,
  color,
  maxLines,
}: TextProps) => {
  return (
    <p
      className={cn(
        textVariants({
          size,
          weight,
          align,
          italic,
          uppercase,
          color,
          maxLines,
        })
      )}
    >
      {text}
    </p>
  );
};

export default Text;
