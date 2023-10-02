import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Sizes } from "../../sharedVariants";

const horizontalDividerVariants = cva("w-0.5 rounded-full", {
  variants: {
    color: {
      Light: "bg-light",
      Default: "bg-default",
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
  color: "Default" | "Light";
  height: Sizes;
  className?: string;
}

export const initialProps: HorizontalDividerProps = {
  color: "Default",
  height: "16px",
};

const HorizontalDivider = ({
  color,
  height,
  className,
}: HorizontalDividerProps) => {
  return (
    <span
      className={cn(
        horizontalDividerVariants({
          height,
          color,
          className,
        })
      )}
    />
  );
};

export default HorizontalDivider;
