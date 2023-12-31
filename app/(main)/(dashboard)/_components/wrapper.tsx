import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 md:px-8 lg:pl-72 lg:pr-16 py-5 w-full h-full">
      {children}
    </div>
  );
};

export default Wrapper;
