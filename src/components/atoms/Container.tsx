import { cva } from "class-variance-authority";
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
      flex: "flex flex-col lg:flex-row",
      grid: "grid",
      row: "flex flex-row",
      column: "flex flex-col",
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
    // backgroundColor: {
    //   white: "bg-white",
    //   dust: "bg-dust",
    //   sage: "bg-sage",
    //   leaf: "bg-leaf",
    //   powder: "bg-powder",
    //   moss: "bg-moss",
    //   mint: "bg-mint",
    // },
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginRight,
    marginLeft,
    marginBottom,
    marginTop,
  },
  defaultVariants: {
    layout: "column",
    columnSpan: "1",
  },
});

// export interface ContainerProps
//   extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof containerVariants> {
//   children?: React.ReactNode;
// }

export interface ContainerProps {
  children?: React.ReactNode;
  /**
   * @displayName Layout
   * @tooltip Defines the layout of the container
   */
  layout?: "flex" | "grid" | "row" | "column";
  /**
   * @displayName Column Count
   * @tooltip Defines the number of columns the container has. NOTE: Only works with grid layout
   */
  columnCount?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * @displayName Column Span
   * @tooltip Defines the number of columns the container spans. NOTE: Only works with grid layout
   */
  columnSpan?: "1" | "2" | "3" | "4" | "5" | "6";
  /**
   * @displayName Padding Top
   * @tooltip Defines the padding top of the container
   */
  paddingTop?: Sizes;
  /**
   * @displayName Padding Bottom
   * @tooltip Defines the padding bottom of the container
   */
  paddingBottom?: Sizes;
  /**
   * @displayName Padding Left
   * @tooltip Defines the padding left of the container
   */
  paddingLeft?: Sizes;
  /**
   * @displayName Padding Right
   * @tooltip Defines the padding right of the container
   */
  paddingRight?: Sizes;
  /**
   * @displayName Margin Top
   * @tooltip Defines the margin top of the container
   */
  marginTop?: Sizes;
  /**
   * @displayName Margin Bottom
   * @tooltip Defines the margin bottom of the container
   */
  marginBottom?: Sizes;
  /**
   * @displayName Margin Left
   * @tooltip Defines the margin left of the container
   */
  marginLeft?: Sizes;
  /**
   * @displayName Margin Right
   * @tooltip Defines the margin right of the container
   */
  marginRight?: Sizes;
  /**
   * @displayName Background Color
   * @tooltip Defines the background color of the container
   */
  // backgroundColor?:
  //   | "white"
  //   | "dust"
  //   | "sage"
  //   | "leaf"
  //   | "powder"
  //   | "moss"
  //   | "mint";
  /**
   * @tooltip Used to override the default styles
   */
  className?: string;
}

export const initialProps: ContainerProps = {
  layout: "flex",
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
  // backgroundColor: "white",
  className: "",
};

const Container = ({
  className,
  layout,
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
}: // backgroundColor,
ContainerProps) => {
  return (
    <div
      className={cn(
        containerVariants({
          layout,
          className,
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
          // backgroundColor,
        })
      )}
    >
      {children}
    </div>
  );
};

export default Container;
