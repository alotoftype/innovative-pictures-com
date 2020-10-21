import { Link } from "gatsby";
import React from "react";
import CTALink from "./CTALink";

const Header = ({ showNav, siteTitle, scrolled, navMenuItems = [], textWhite = true }) => {
  let headerClass = "fixed w-full z-30 top-0 text-white";
  headerClass += scrolled ? " bg-white shadow" : "";

  let navActionClass =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75";
  navActionClass += !textWhite || !scrolled ? " bg-white text-gray-800" : "";
  navActionClass += textWhite || scrolled ? " gradient text-white" : "";

  let navContentClass =
    "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20";
  navContentClass += !textWhite || !scrolled ? " lg:bg-transparent bg-gray-100" : "";
  navContentClass += textWhite || scrolled ? " bg-white" : "";

  let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";
  titleClass += !textWhite || scrolled ? " text-gray-800" : "";
  titleClass += textWhite || !scrolled ? " text-white" : "";

  return (
    <nav id="header" className={headerClass}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link id="siteTitle" className={titleClass} to="/">
            {siteTitle}
          </Link>
        </div>

        {showNav && navMenuItems && (
          <div className={navContentClass} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {navMenuItems.map((i) => (
                <li className="mr-3">
                  <CTALink {...i} buttonActionClass={navActionClass} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Header;
