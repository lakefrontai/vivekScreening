"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import theme from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React, { useState } from "react";

const Main = (props: any) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);

  const sideBarProps = {
    collapsed,
    setCollapsed,
  };
  return (
    <>
      <Sidebar {...sideBarProps} />
      <div
        style={{
          marginLeft: collapsed ? "80px" : "250px",
          paddingTop: "60px",
        }}
      >
        <Navbar collapsed={collapsed}/>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </div>
    </>
  );
};

export default Main;
