import { HexColor } from "@yext/studio";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
  backgroundColor?: HexColor;
}

export const initialProps = {
  backgroundColor: "#111827",
};

const MainLayout = ({ children, backgroundColor }: MainLayoutProps) => {
  return (
    <div
      className="flex min-h-screen w-full flex-col"
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
};

export default MainLayout;
