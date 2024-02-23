"use client";
import Box from "@mui/material/Box";
import { SideBar } from "../sidebar/index";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const sidebarWidth = "240px";

  return (
    <Box sx={{ height: "calc(100vh - 4rem)", display: "flex" }}>
      <Box sx={{ flex: `0 0 ${sidebarWidth}` }}>
        <SideBar sidebarWidth={sidebarWidth} />
      </Box>
      <Box sx={{ flex: "1" }}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#191919",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
