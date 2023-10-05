export interface MainContentWrapperProps {
  children?: React.ReactNode;
}

const MainContentWrapper = ({ children }: MainContentWrapperProps) => {
  return <main className="mx-auto max-w-5xl px-6 pb-52">{children}</main>;
};

export default MainContentWrapper;
