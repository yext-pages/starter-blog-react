import { cn } from "../../utils/cn";

export interface PageWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return <div className={cn("min-h-screen", className)}>{children}</div>;
};

export default PageWrapper;
