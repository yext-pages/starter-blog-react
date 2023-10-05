import { cva } from "cva";
import { cn } from "../../utils/cn";
import { Sizes } from "../../sharedVariants";

const horizontalDividerVariants = cva("w-0.5 rounded-full", {
  variants: {
    color: {
      Black: "bg-black",
      "Dark Gray": "bg-gray-900",
      Gray: "bg-gray-600",
      "Light Gray": "bg-gray-400",
      White: "bg-white",
      Blue: "bg-blue-700",
      "Dark Blue": "bg-blue-900",
    },
    height: {
      "0px": "h-0",
      "4px": "h-1",
      "8px": "h-2",
      "16px": "h-4",
      "24px": "h-6",
      "32px": "h-8",
      "40px": "h-10",
      "48px": "h-12",
      "56px": "h-14",
      "64px": "h-16",
      "72px": "h-18",
      "80px": "h-20",
      "88px": "h-22",
      "96px": "h-24",
    },
  },
});

export interface HorizontalDividerProps {
  /**
   * @displayName Color
   * @tooltip Controls the color of the divider
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
   * @displayName Height
   * @tooltip Controls the height of the divider
   */
  height: Sizes;
}

export const initialProps: HorizontalDividerProps = {
  color: "Dark Gray",
  height: "16px",
};

const HorizontalDivider = ({ color, height }: HorizontalDividerProps) => {
  return (
    <span
      className={cn(
        horizontalDividerVariants({
          height,
          color,
        })
      )}
    />
  );
};

export default HorizontalDivider;
