import { cn } from "../../utils/cn";

export interface PageWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export const initialProps: PageWrapperProps = {
  className: "",
};

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <div className={cn("min-h-screen bg-white/90", className)}>{children}</div>
  );
};

export default PageWrapper;
