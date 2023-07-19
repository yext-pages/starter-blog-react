import React from "react";

interface MainProps {
  children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="h-full antialiased">
      <div className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Main;
