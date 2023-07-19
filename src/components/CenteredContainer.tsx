export interface CenteredContainerProps {
  children: React.ReactNode;
}

const CenteredContainer = ({ children }: CenteredContainerProps) => {
  return <div className={"mx-auto max-w-5xl"}>{children}</div>;
};

export default CenteredContainer;
