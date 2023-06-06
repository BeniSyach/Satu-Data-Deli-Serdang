import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutDashboard: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Halaman Dashboard</header>
      <main>{children}</main>
      <footer>Ini Footer</footer>
    </div>
  );
};

export default LayoutDashboard;
