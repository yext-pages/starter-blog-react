import { HexColor } from "@yext/studio";

export interface HorizontalDividerProps {
  dividerColor: HexColor;
  dividerHeight: "2" | "4" | "6" | "8";
}

export const initialProps: HorizontalDividerProps = {
  dividerColor: "#000000",
  dividerHeight: "4",
};

const HorizontalDivider = ({
  dividerColor,
  dividerHeight,
}: HorizontalDividerProps) => {
  const heightVariants = {
    "2": "h-2",
    "4": "h-4",
    "6": "h-6",
    "8": "h-8",
  };

  return (
    <span
      className={`mx-2 ${heightVariants[dividerHeight]} w-0.5 rounded-full`}
      style={{ backgroundColor: dividerColor }}
    />
  );
};

export default HorizontalDivider;
