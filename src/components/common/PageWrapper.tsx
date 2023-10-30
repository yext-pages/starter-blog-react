import { cva } from "cva";
import { cn } from "../../utils";
import { Colors, backgroundColor } from "../../sharedVariants";

const pageWrapperVariants = cva("relative min-h-screen", {
  variants: {
    backgroundColor,
  },
});

export interface PageWrapperProps {
  /**
   * @displayName Background Color
   * @tooltip Defines the background color of the container
   */
  backgroundColor?: Colors;
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
