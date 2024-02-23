import DashboardLayout from "../../Components/layout/Dashboard";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
