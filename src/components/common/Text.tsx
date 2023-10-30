import { cva } from "cva";
import { cn } from "../../utils";
import {
  Colors,
  TextSizes,
  Weights,
  color,
  textSize,
  weight,
} from "../../sharedVariants";

const textVariants = cva("font-sans", {
  variants: {
    color,
    textSize,
    weight,
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
  textSize?: TextSizes;
  /**
   * @displayName Weight
   * @tooltip Controls the font weight of the text
   */
  weight?: Weights;
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
  color?: Colors;
  /**
   * @displayName Max Lines
   * @tooltip Controls the number of lines of text shown before truncation
   **/
  maxLines?: "1" | "2" | "3" | "4" | "5" | "None";
}

export const initialProps: TextProps = {
  text: "Text goes here",
  textSize: "M",
  weight: "Regular",
  align: "Left",
  italic: "No",
  uppercase: "No",
  color: "Dark Gray",
  maxLines: "None",
};

const Text = ({
  text,
  textSize,
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
          textSize,
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
