import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const textVariants = cva("font-sans", {
  variants: {
    color: {
      Light: "text-light",
      Default: "text-default",
    },
    size: {
      L: "text-lg leading-normal",
      M: "text-base leading-normal",
      S: "text-sm leading-normal",
      XS: "text-xs leading-normal",
    },
    weight: {
      Bold: "font-bold",
      "Semi Bold": "font-medium",
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
  },
});

// export interface ParagraphVariants
//   extends VariantProps<typeof paragraphVariants> {}

// I wish that I could do this:
// export interface ParagraphProps extends ParagraphVariants {
//   StyledText?: string;
// }

// But I have to do this:
export interface TextProps {
  /**
   * @displayName Text
   **/
  text?: string;
  /**
   * @displayName Size
   **/
  size?: "XS" | "S" | "M" | "L";
  /**
   * @displayName Weight
   **/
  weight?: "Light" | "Regular" | "Semi Bold" | "Bold";
  /**
   * @displayName Align
   **/
  align?: "Left" | "Center" | "Right";
  /**
   * @displayName Italic
   **/
  italic?: "Yes" | "No";
  /**
   * @displayName Uppercase
   **/
  uppercase?: "Yes" | "No";
  /**
   * @displayName Color
   **/
  color?: "Light" | "Default";
  /**
   * @tooltip Used to override the default styles
   **/
  className?: string;
}

export const initialProps: TextProps = {
  text: "Text goes here",
  size: "M",
  weight: "Regular",
  align: "Left",
  italic: "No",
  uppercase: "No",
  color: "Default",
  className: "",
};

const Text = ({
  text,
  size,
  weight,
  align,
  italic,
  uppercase,
  color,
  className,
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
          className,
        })
      )}
    >
      {text}
    </p>
  );
};

export default Text;
