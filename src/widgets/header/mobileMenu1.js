import CloseIcon from "assets/svg/CloseIcon";
import React from "react";
import Link from "next/link";

const MobileMenu1 = ({ toggleNav, navRef, setToggleNav, smoothScroll }) => {
  return (
    <section
      className={
        toggleNav
          ? "flex bg-transparentD justify-center items-center right-0 w-full h-screen sm:h-0 fixed z-50"
          : "-z-10"
      }
    >
      {/* <MobilePopOver /> */}
      <div
        ref={navRef}
        className={
          toggleNav
            ? "fixed bg-transparentD2 rounded-l-xl border-l-2 border-[#eeeeee33] z-50 top-0 right-0 p-4 pt-2 w-4/6 h-screen justify-center sm:hidden transition-all duration-500"
            : "fixed bg-transparentD2 rounded-l-xl border-l-2 border-[#eeeeee33] z-50 top-0 -right-full p-4 pt-2 w-4/6 h-screen justify-center sm:hidden transition-all duration-500"
        }
      >
        <div className="w-full h-8 mb-7 grid justify-items-end ">
          <div
            onClick={() => {
              setToggleNav(false);
            }}
          >
            <CloseIcon style="h-8 w-8 text-white xl:hover:cursor-pointer xl:hover:bg-blue-200 active:bg-blue-200 duration-900 rounded-full" />
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start space-y-6">
          <a
            onClick={() => {
              smoothScroll("top");
              setToggleNav(false);
            }}
            className="text-xl text-white font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
          >
            Home
          </a>
          <a
            onClick={() => {
              smoothScroll("product1");
              setToggleNav(false);
            }}
            className="text-xl text-white font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
          >
            Sea Food
          </a>
          <a
            onClick={() => {
              smoothScroll("product2");
              setToggleNav(false);
            }}
            className="text-xl text-white font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
          >
            Processed Meat
          </a>
          <a
            onClick={() => {
              smoothScroll("about");
              setToggleNav(false);
            }}
            className="text-xl text-white font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
          >
            Pickles
          </a>
          <a
            onClick={() => {
              smoothScroll("about");
              setToggleNav(false);
            }}
            className="text-xl text-white font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
          >
            Our Story
          </a>
          <Link href={"/contact-us"}>
            <a className="text-xl text-white font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileMenu1;
