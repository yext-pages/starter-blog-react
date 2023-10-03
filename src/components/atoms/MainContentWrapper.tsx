import { cn } from "../../utils/cn";

export interface MainContentWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export const initialProps: MainContentWrapperProps = {
  className: "",
};

const MainContentWrapper = ({
  children,
  className,
}: MainContentWrapperProps) => {
  return (
    <main className={cn("mx-auto max-w-5xl px-6", className)}>{children}</main>
  );
};

export default MainContentWrapper;
