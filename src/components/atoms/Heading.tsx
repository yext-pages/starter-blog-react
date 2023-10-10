import { cva } from "cva";
import { cn } from "../../utils/cn";
import { Colors, Weights, color, weight } from "../../sharedVariants";

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
    weight,
    color,
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
  color?: Colors;
  /**
   * @displayName Font Weight
   * @tooltip Controls the font weight of the text
   */
  weight?: Weights;
}

export const initialProps: HeadingProps = {
  text: "Heading Text",
  rank: "1",
  align: "Left",
  weight: "Regular",
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
