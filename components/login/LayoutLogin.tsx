import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutLogin: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default LayoutLogin;
