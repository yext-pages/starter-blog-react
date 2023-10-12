import { cva } from "cva";
import { cn, formatDate } from "../../utils";
import {
  Colors,
  TextSizes,
  Weights,
  color,
  textSize,
  weight,
} from "../../sharedVariants";

const dateVariants = cva("font-sans", {
  variants: {
    color,
    weight,
    textSize,
  },
});

export interface DateProps {
  /**
   * @displayName Date
   * @tooltip Controls the date to display
   */
  date?: string;
  /**
   * @displayName Size
   * @tooltip Controls the font size of the date
   */
  textSize?: TextSizes;
  /**
   * @displayName Weight
   * @tooltip Controls the font weight of the date
   */
  weight?: Weights;
  /**
   * @displayName Color
   * @tooltip Controls the text color of the date
   */
  color?: Colors;
}

export const initialProps: DateProps = {
  date: "2023-06-01",
  color: "Dark Gray",
  weight: "Regular",
  textSize: "M",
};

const Date = ({ date, color, weight, textSize }: DateProps) => {
  return (
    <p
      className={cn(
        dateVariants({
          textSize,
          weight,
          color,
        })
      )}
    >
      {formatDate(date)}
    </p>
  );
};

export default Date;
