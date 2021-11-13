import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const DashBoardHeader = ({ sidebarOpen, setSidebarOpen }) => {
  const { logOut } = useAuth();
  const history = useHistory();
  const handleLogOut = () => {
    logOut();
    history.push("/");
  };
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <NavLink
              to="/home"
              className="text-gray-800 text-xl font-medium hover:text-red-600"
            >
              Home
            </NavLink>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            <button
              onClick={handleLogOut}
              className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-red-600"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashBoardHeader;
