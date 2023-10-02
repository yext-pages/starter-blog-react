import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const headingVariants = cva("", {
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
  },
});

export interface HeadingProps {
  /**
   * @tooltip Content of the heading
   * @displayName Text
   */
  text: string;
  /**
   * @tooltip Defines whether the heading is an h1, h2, or h3.
   * @displayName Rank
   */
  rank?: "1" | "2" | "3" | "4";
  /**
   * @displayName Text Align
   */
  align?: "Left" | "Center" | "Right";
  /**
   * @displayName Font Weight
   */
  weight?: "Normal" | "Semi Bold" | "Bold";
  /**
   * @tooltip Used to override the default styles
   */
  className?: string;
}

export const initialProps: HeadingProps = {
  text: "Heading Text",
  rank: "1",
  align: "Left",
  weight: "Normal",
  className: "",
};

const Heading = ({ text, rank, className, align, weight }: HeadingProps) => {
  const Tag: any = rank ? `h${rank}` : "span";

  return (
    <Tag className={cn(headingVariants({ rank, align, className, weight }))}>
      {text}
    </Tag>
  );
};

export default Heading;
