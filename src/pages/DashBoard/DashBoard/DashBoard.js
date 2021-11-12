import React, { useState } from "react";
import DashBoardHeader from "../DashBoardHeader/DashBoardHeader";
import DashBoardSideBar from "../DashBoardSideBar/DashBoardSideBar";

const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <DashBoardSideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <DashBoardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main></main>
      </div>
    </div>
  );
};

export default DashBoard;
