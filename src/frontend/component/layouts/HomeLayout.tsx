import { ReactNode } from "react";

type HomeLayoutProps = {
  children?: ReactNode;
};
const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="px-3 sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
      {children}
    </div>
  );
};

export default HomeLayout;