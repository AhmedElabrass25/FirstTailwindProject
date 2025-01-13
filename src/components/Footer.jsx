import React from "react";
import logo from "../assets/logo.png";
import { footerLinks, socialMedia } from "./source";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <>
      <section className="bg-black w-full text-white py-5">
        <div className="container">
          {/* >>>>>>>>>>>>>>>>>>>Logo<<<<<<<<<<<<<< */}
          <div className=" w-full mb-3 mt-3">
            <HashLink
              to="#home"
              className="bg-white p-1 px-3 me-6 w-fit flex items-center rounded-sm"
            >
              <img src={logo} alt="" />
              <h2 className="capitalize tracking-[2px] text-black font-bold text-[22px]">
                Nike
              </h2>
            </HashLink>
            <p className="text-lg text-slate-gray my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              <br />
              perspiciatis suscipit illo modi similique, sint mollitia, dolores.
            </p>
            {/* >>>>>>>>>>>>>>>>>>socialMedia>>>>>>>>>>>>> */}
            <div className="w-100 socialMedia flex items-center justify-start gap-3 mb-5">
              {socialMedia.map((social, index) => {
                return (
                  <Link
                    to="/"
                    key={index}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white"
                  >
                    <img src={social.src} alt={social.alt} />
                  </Link>
                );
              })}
            </div>
          </div>
          {/* >>>>>>>>>>>>>>>>>>>footerLinks<<<<<<<<<<<<<< */}
          <div className="row" style={{ alignItems: "start" }}>
            {footerLinks.map((foot, index) => {
              return (
                <div className="w-full md:w-[49%] lg:w-[33%]" key={index}>
                  <ul className="mb-5 ">
                    <h2 className="font-bold text-coral-red text-xl tracking-[1px]">
                      {foot.title}
                    </h2>
                    {foot.links.map((link, index) => {
                      return (
                        <li key={index}>
                          <Link
                            to={link.link}
                            className="ps-1 text-slate-gray font-semibold hover:text-white hover:ps-2 transition-all duration-200"
                          >
                            {link.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
