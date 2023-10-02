import { cn } from "../utils/cn";

export interface MainProps {
  children?: React.ReactNode;
  className?: string;
}

export const initialProps: MainProps = {
  className: "",
};

const Main = ({ children, className }: MainProps) => {
  return (
    <main className={cn("mx-auto max-w-5xl px-6", className)}>{children}</main>
  );
};

export default Main;
