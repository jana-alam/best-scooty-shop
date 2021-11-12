import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import whiteLogo from "../../../images/logo-white.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <Disclosure as="nav" className="bg-red-600 shadow-lg sm:py-2">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Header Left side Logo & Menu  */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden w-full"
                    src={whiteLogo}
                    alt="scooty-best"
                  />
                  <img
                    className="hidden lg:block h-14 w-full"
                    src={whiteLogo}
                    alt="scooty-best"
                  />
                </div>
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                  <div className="flex space-x-8">
                    <NavLink
                      className="text-white text-xl  border-b-2 border-transparent hover:text-gray-200"
                      activeClassName="border-white"
                      to="/home"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      className="text-white text-xl  border-b-2 border-transparent hover:text-gray-200"
                      activeClassName="border-white"
                      to="/scooters"
                    >
                      Scooters
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* Header right side user,login, logout */}
              <div className="flex items-center pr-2 sm:ml-6 sm:pr-0 space-x-4">
                {user?.email ? (
                  <button
                    onClick={handleLogOut}
                    className="px-4 py-2 bg-white text-red-600 font-medium rounded-full"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    className="text-white text-xl  border-b-2 border-transparent hover:text-gray-200"
                    activeClassName=" border-white"
                    to="/login"
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-red-500">
            <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
              <NavLink className="text-white text-xl" to="/home">
                <Disclosure.Button>Home</Disclosure.Button>
              </NavLink>
              <NavLink className="text-white text-xl" to="/scooters">
                <Disclosure.Button>Scooters</Disclosure.Button>
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
