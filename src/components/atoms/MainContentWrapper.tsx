import { cn } from "../../utils/cn";

export interface MainContentWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

const MainContentWrapper = ({
  children,
  className,
}: MainContentWrapperProps) => {
  return (
    <main className={cn("mx-auto max-w-5xl px-6 pb-52", className)}>
      {children}
    </main>
  );
};

export default MainContentWrapper;
