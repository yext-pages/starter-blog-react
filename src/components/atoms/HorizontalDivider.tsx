import { cva } from "cva";
import { cn } from "../../utils/cn";
import { Colors, Sizes, backgroundColor, height } from "../../sharedVariants";

const horizontalDividerVariants = cva("w-0.5 rounded-full", {
  variants: {
    color: backgroundColor,
    height,
  },
});

export interface HorizontalDividerProps {
  /**
   * @displayName Color
   * @tooltip Controls the color of the divider
   */
  color?: Colors;
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
