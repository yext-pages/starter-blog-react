import { cva } from "cva";
import { cn } from "../../utils/cn";

const pageWrapperVariants = cva("relative min-h-screen", {
  variants: {
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

export interface PageWrapperProps {
  /**
   * @displayName Background Color
   * @tooltip Defines the background color of the container
   */
  backgroundColor?:
    | "White"
    | "Black"
    | "Dark Gray"
    | "Gray"
    | "Light Gray"
    | "Blue"
    | "Dark Blue";
  children?: React.ReactNode;
}

export const initialProps: PageWrapperProps = {
  /**
   * @displayName Background Color
   * @tooltip Controls the background color of the page
   */
  backgroundColor: "White",
};

const PageWrapper = ({ children, backgroundColor }: PageWrapperProps) => {
  return (
    <div
      className={cn(
        pageWrapperVariants({
          backgroundColor,
        })
      )}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
