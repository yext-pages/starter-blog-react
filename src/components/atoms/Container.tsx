import { cva } from "cva";
import { cn } from "../../utils/cn";
import {
  paddingLeft,
  paddingBottom,
  paddingRight,
  paddingTop,
  marginRight,
  marginLeft,
  marginBottom,
  marginTop,
  Sizes,
} from "../../sharedVariants";

const containerVariants = cva("", {
  variants: {
    layout: {
      Flex: "flex flex-col lg:flex-row",
      Grid: "grid",
      Row: "flex flex-row",
      Column: "flex flex-col",
    },
    flexGap: {
      "2": "gap-2",
      "4": "gap-4",
      "6": "gap-6",
      "8": "gap-8",
      "10": "gap-10",
      "12": "gap-12",
    },
    itemAlignment: {
      Start: "items-start",
      Center: "items-center",
      End: "items-end",
    },
    columnCount: {
      "1": "grid-cols-1",
      "2": "grid-cols-2",
      "3": "grid-cols-3",
      "4": "grid-cols-4",
      "5": "grid-cols-5",
      "6": "grid-cols-6",
    },
    columnSpan: {
      "1": "col-span-1",
      "2": "col-span-2",
      "3": "col-span-3",
      "4": "col-span-4",
      "5": "col-span-5",
      "6": "col-span-6",
    },
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginRight,
    marginLeft,
    marginBottom,
    marginTop,
    maxWidth: {
      XS: "max-w-lg",
      S: "max-w-xl",
      M: "max-w-2xl",
      L: "max-w-3xl",
      XL: "max-w-5xl",
      None: "max-w-none",
    },
    backgroundColor: {
      Black: "bg-black",
      "Dark Gray": "bg-gray-900",
      Gray: "bg-gray-600",
      "Light Gray": "bg-gray-400",
      White: "bg-white",
      Blue: "bg-blue-700",
      "Dark Blue": "bg-blue-900",
    },
  },
});

export interface ContainerProps {
  children?: React.ReactNode;
  /**
   * @displayName Layout
   * @tooltip Controls the layout of the container
   */
  layout?: "Flex" | "Grid" | "Row" | "Column";
  /**
   * @displayName Background Color
   * @tooltip Controls the background color of the container
   */
  backgroundColor?:
    | "White"
    | "Black"
    | "Dark Gray"
    | "Gray"
    | "Light Gray"
    | "Blue"
    | "Dark Blue";
  /**
   * @displayName Flex Gap
   * @tooltip Controls the amount of space between each item. NOTE: Does not work with grid layout
   */
  flexGap?: "2" | "4" | "6" | "8" | "10" | "12";
  /**
   * @displayName Item Alignment
   * @tooltip Controls the alignment of items within a container. NOTE: Does not work with grid layout
   */
  itemAlignment?: "Start" | "Center" | "End";
  /**
   * @displayName Column Count
   * @tooltip Controls the number of columns the container has. NOTE: Only works with grid layout
   */
  columnCount?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * @displayName Column Span
   * @tooltip Controls the number of columns the container spans. NOTE: Only works with grid layout
   */
  columnSpan?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * @displayName Padding Top
   * @tooltip Controls the padding top of the container
   */
  paddingTop?: Sizes;
  /**
   * @displayName Padding Bottom
   * @tooltip Controls the padding bottom of the container
   */
  paddingBottom?: Sizes;
  /**
   * @displayName Padding Left
   * @tooltip Controls the padding left of the container
   */
  paddingLeft?: Sizes;
  /**
   * @displayName Padding Right
   * @tooltip Controls the padding right of the container
   */
  paddingRight?: Sizes;
  /**
   * @displayName Margin Top
   * @tooltip Controls the margin top of the container
   */
  marginTop?: Sizes;
  /**
   * @displayName Margin Bottom
   * @tooltip Controls the margin bottom of the container
   */
  marginBottom?: Sizes;
  /**
   * @displayName Margin Left
   * @tooltip Controls the margin left of the container
   */
  marginLeft?: Sizes | "Auto";
  /**
   * @displayName Margin Right
   * @tooltip Controls the margin right of the container
   */
  marginRight?: Sizes | "Auto";
  /**
   * @displayName Max Width
   * @tooltip Controls the max width of the container
   */
  maxWidth?: "XS" | "S" | "M" | "L" | "XL" | "None";
}

export const initialProps: ContainerProps = {
  layout: "Flex",
  backgroundColor: "White",
  flexGap: "2",
  itemAlignment: "Start",
  columnCount: "3",
  columnSpan: "1",
  paddingTop: "0px",
  paddingBottom: "0px",
  paddingLeft: "0px",
  paddingRight: "0px",
  marginTop: "0px",
  marginBottom: "0px",
  marginLeft: "0px",
  marginRight: "0px",
  maxWidth: "None",
};

const Container = ({
  layout,
  backgroundColor,
  flexGap,
  itemAlignment,
  children,
  columnCount,
  columnSpan,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  maxWidth,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        containerVariants({
          layout,
          backgroundColor,
          flexGap,
          itemAlignment,
          columnCount,
          columnSpan,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          marginRight,
          marginLeft,
          marginBottom,
          marginTop,
          maxWidth,
        })
      )}
    >
      {children}
    </div>
  );
};

export default Container;
