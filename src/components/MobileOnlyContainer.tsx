export interface MobileOnlyContainerProps {
  children: React.ReactNode;
}

const MobileOnlyContainer = ({ children }: MobileOnlyContainerProps) => {
  return <section className="md:hidden">{children}</section>;
};

export default MobileOnlyContainer;
