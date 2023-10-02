import { cn } from "../../utils/cn";

export interface PageProps {
  children?: React.ReactNode;
  className?: string;
}

export const initialProps: PageProps = {
  className: "",
};

const Page = ({ children, className }: PageProps) => {
  return <div className={cn("min-h-screen", className)}>{children}</div>;
};

export default Page;
