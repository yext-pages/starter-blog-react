import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const headingVariants = cva("tracking-tight", {
  variants: {
    rank: {
      "1": "text-4xl leading-10",
      "2": "text-3xl leading-8",
      "3": "text-2xl leading-6",
      "4": "text-xl leading-6",
    },
    align: {
      Left: "text-left",
      Center: "text-center",
      Right: "text-right",
    },
    weight: {
      Normal: "font-normal",
      "Semi Bold": "font-semibold",
      Bold: "font-bold",
    },
    color: {
      Black: "text-black",
      "Dark Gray": "text-gray-900",
      Gray: "text-gray-600",
      "Light Gray": "text-gray-400",
      White: "text-white",
      Blue: "text-blue-700",
      "Dark Blue": "text-blue-900",
    },
  },
});

export interface HeadingProps {
  /**
   * @displayName Text
   * @tooltip Controls the content of the heading
   */
  text: string;
  /**
   * @displayName Rank
   * @tooltip Controls whether the heading is an h1, h2, or h3.
   */
  rank?: "1" | "2" | "3" | "4";
  /**
   * @displayName Text Align
   * @tooltip Controls the alignment of the text
   */
  align?: "Left" | "Center" | "Right";
  /**
   * @displayName Text Color
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
   * @displayName Font Weight
   * @tooltip Controls the font weight of the text
   */
  weight?: "Normal" | "Semi Bold" | "Bold";
}

export const initialProps: HeadingProps = {
  text: "Heading Text",
  rank: "1",
  align: "Left",
  weight: "Normal",
  color: "Dark Gray",
};

const Heading = ({ text, rank, align, weight, color }: HeadingProps) => {
  const Tag: any = rank ? `h${rank}` : "span";

  return (
    <Tag className={cn(headingVariants({ rank, align, color, weight }))}>
      {text}
    </Tag>
  );
};

export default Heading;
