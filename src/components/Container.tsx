import React, { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  className?: string;
  children?: ReactNode;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("sm:px-8", className)}>
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
