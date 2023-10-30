import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Colors, Sizes, color, height } from "../../sharedVariants";
import { cn } from "../../utils";
import { cva } from "cva";

const arrowVariants = cva("", {
  variants: {
    height,
    color,
  },
});

export interface ArrowIconProps {
  color?: Colors;
  height: Sizes;
}

const ArrowIcon = ({ height, color }: ArrowIconProps) => {
  return <ArrowLeftIcon className={cn(arrowVariants({ height, color }))} />;
};

export default ArrowIcon;
