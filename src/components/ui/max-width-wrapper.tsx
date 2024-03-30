import { type ReactNode } from "react";

type MaxWidthWrapperProps = {
  children: ReactNode;
};

export const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};
