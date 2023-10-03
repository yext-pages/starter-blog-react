import { cn } from "../../utils/cn";

export interface PageWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <div
      className={cn("flex min-h-screen flex-col justify-between", className)}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
