import { ReactNode } from "react";

type AuthLayoutProps = {
  children?: ReactNode;
};
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="px-3 w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
      {children}
    </div>
  );
};

export default AuthLayout;
