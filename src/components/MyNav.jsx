import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import bar from "../assets/bar.png";
import xMark from "../assets/xmark-circle.svg";
import { HashLink } from "react-router-hash-link";

const MyNav = () => {
  let links = [
    { name: "home", path: "home" },
    { name: "products", path: "products" },
    { name: "services", path: "services" },
    { name: "reviews", path: "reviews" },
    { name: "contact us", path: "contact" },
  ];
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-lg py-2 w-full fixed top-0 left-0 z-[999]">
        <div className="container relative">
          <div className="row">
            <HashLink to="#home" className="flex items-center me-5">
              <img src={logo} alt="logo" />
              <span className="font-medium text-2xl">Nike</span>
            </HashLink>
            <ul className="flex items-center gap-6 max-md:hidden">
              {/* >>>>>>>>>>>>>>>>>Links>>>>>>>>>>>>>>>> */}
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <HashLink
                      to={`#${link.path}`}
                      className="capitalize font-medium"
                    >
                      {link.name}
                    </HashLink>
                  </li>
                );
              })}
            </ul>
            {/* >>>>>>>>BAR ICON>>>>>>>>>>DECLARE FROM Meduim screen */}
            <button
              className="bar md:hidden transition-all duration-200"
              onClick={() => setIsOpened(true)}
            >
              <img src={bar} alt="bar" className="cursor-pointer" />
            </button>
          </div>
        </div>
        {/* >>>>>>>>Side Navbar>>>>>>>>>>DECLARE FROM Meduim screen */}
        {isOpened && (
          <ul className="sideNavbar w-full sm:w-[350px] flex flex-col items-center px-8 pt-20 h-screen bg-white shadow-BoxShadow absolute z-[9999] right-0 top-0 md:w-0 transition-all ease-in duration-700">
            <li className="closeIcon w-full flex justify-end mb-16">
              <img
                src={xMark}
                className="w-7 h-7 cursor-pointer"
                alt="xMark"
                onClick={() => setIsOpened(false)}
              />
            </li>
            {/* >>>>>>>>>>>>>>>>>Links>>>>>>>>>>>>>>>> */}
            {links.map((link, index) => {
              return (
                <li className="mb-10" key={index}>
                  <HashLink
                    to={`#${link.path}`}
                    onClick={() => setIsOpened(false)}
                    className="capitalize text-xl font-medium"
                  >
                    {link.name}
                  </HashLink>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </>
  );
};

export default MyNav;
