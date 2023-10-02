import { formatDate } from "../../utils/formatDate";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const dateVariants = cva("font-sans", {
  variants: {
    color: {
      Default: "text-default",
      Light: "text-light",
    },
    weight: {
      Bold: "font-bold",
      "Semi Bold": "font-medium",
      Regular: "font-regular",
      Light: "font-light",
    },
    size: {
      L: "text-lg leading-[27px]",
      M: "text-base leading-normal",
      S: "text-sm leading-normal",
      XS: "text-xs leading-normal",
    },
  },
});

export interface DateProps {
  /**
   * @displayName Date
   **/
  date?: string;
  /**
   * @displayName Size
   **/
  size?: "XS" | "S" | "M" | "L";
  /**
   * @displayName Weight
   **/
  weight?: "Light" | "Regular" | "Semi Bold" | "Bold";
  /**
   * @displayName Color
   **/
  color?: "Light" | "Default";
  /**
   * @tooltip Used to override the default styles
   **/
  className?: string;
}

export const initialProps: DateProps = {
  date: "2023-06-01",
  color: "Default",
  weight: "Regular",
  size: "M",
};

const Date = ({ date, color, weight, size, className }: DateProps) => {
  return (
    <p
      className={cn(
        dateVariants({
          size,
          weight,
          color,
          className,
        })
      )}
    >
      {formatDate(date)}
    </p>
  );
};

export default Date;
