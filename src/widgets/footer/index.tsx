// import styles from "assets/styles/underline.module.css";

import React from "react";
import Link from "next/link";

import FaceBookIcon from "assets/svg/FaceBookIcon";
import InstagramIcon from "assets/svg/InstagramIcon";
import YoutubeIcon from "assets/svg/YoutubeIcon";

import image1 from "../../../public/assets/fork-and-spoon.png";
import image2 from "../../../public/assets/chopping-board.png";
import image3 from "../../../public/assets/salt-shaker.png";

import appStore from "AppStore";

type Props = { smoothScroll?: any };

const Footer = ({ smoothScroll }: Props) => {
  const [paddingClass] = appStore("paddingClass");

  const BrandSection = () => (
    <div className="w-full md:w-60 md:h-72 flex flex-col items-start justify-start text-justify space-y-2 pr-2 xl:tracking-widest">
      {smoothScroll ? (
        <a
          onClick={() => {
            smoothScroll("top");
          }}
          className="tracking-tighter font-serif whitespace-nowrap flex justify-start items-center w-fit text-3xl font-bold pt-2 transition-all duration-300 cursor-pointer"
        >
          {/* <div className="w-20 h-12 md:w-28 md:h-20 headerLogo" /> */}
          Alp Harvest
        </a>
      ) : (
        <Link href={"/"}>
          <a className="tracking-tighter font-serif whitespace-nowrap flex justify-start items-center w-fit text-3xl font-bold pt-2 transition-all duration-300 cursor-pointer">
            Alp Harvest
          </a>
        </Link>
      )}
      {/* brand description */}
      <div className="p-4 pl-0">
        <p className="tracking-tight 2sm:w-40 md:w-full">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </div>
  );

  const ResourceSection = () => (
    <div className="w-full sm:w-48 p-4 pl-0 sm:ml-2 space-y-2 flex flex-col xl:tracking-widest">
      <p className="font-medium text-2xl text-themeColor mb-4">Resources</p>
      {smoothScroll ? (
        <>
          <a
            onClick={() => {
              smoothScroll("top");
            }}
            className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
          >
            Home
          </a>
          <a
            onClick={() => {
              smoothScroll("product1");
            }}
            className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
          >
            Products
          </a>
          <a
            onClick={() => {
              smoothScroll("about");
            }}
            className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
          >
            About
          </a>
          <a
            className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
          >
            Contact Us
          </a>
        </>
      ) : (
        <>
          <Link href={"/"}>
            <a
              className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
            >
              Home
            </a>
          </Link>
          <Link href={"/"}>
            <a
              className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
            >
              Products
            </a>
          </Link>
          <Link href={"/home#about"}>
            <a
              className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
            >
              About
            </a>
          </Link>
          <a
            className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
          >
            Contact Us
          </a>
        </>
      )}
    </div>
  );

  const ProductsSection = () => (
    <div className="w-full sm:w-48 p-4 pl-0 space-y-2 flex flex-col xl:tracking-wide">
      <p className="font-medium text-2xl text-themeColor mb-4">Products</p>
      {smoothScroll ? (
        <>
          <a
            onClick={() => {
              smoothScroll("product1");
            }}
            className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
          >
            Sea Foods
          </a>
          <a
            onClick={() => {
              smoothScroll("product2");
            }}
            className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
          >
            Processed Meat
          </a>
          <a
            onClick={() => {
              smoothScroll("product3");
            }}
            className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
          >
            Pickles
          </a>
        </>
      ) : (
        <>
          <Link href={"/sea-food"}>
            <a
              className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
            >
              Sea Foods
            </a>
          </Link>
          <Link href={"/processed-meat"}>
            <a
              className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
            >
              Processed Meat
            </a>
          </Link>
          <Link href={"/pickles"}>
            <a
              className={`w-fit transition-all duration-500 hover:cursor-pointer hover:text-amber-500 whitespace-nowrap`}
            >
              Pickles
            </a>
          </Link>
        </>
      )}
    </div>
  );

  const ContactSection = () => (
    // <div className="w-full sm:w-80 flex flex-col space-y-2 p-4 pl-0">
    <div className=" w-full md:w-56 space-y-2 py-4 flex flex-col xl:tracking-widest">
      <p className="font-medium text-2xl mb-4">Follow Us</p>
      <div className="flex items-center space-x-4 mb-3 font-thin">
        <FaceBookIcon style="hover:fill-blue-500 w-8 h-8 fill-white cursor-pointer" />
        <InstagramIcon
          style={"w-8 h-8 hover:fill-fuchsia-600 fill-white cursor-pointer"}
        />
        <YoutubeIcon
          style={"w-8 h-8 hover:fill-red-600 fill-white cursor-pointer"}
        />
      </div>
    </div>
  );

  return (
    <div
      className={`z-10 relative w-full h-fit flex flex-wrap justify-start sm:justify-between text-white bg-[#333] pt-10 pb-28 ${paddingClass}`}
    >
      <img
        className="hidden sm:block absolute left-48 bottom-0 h-36"
        src={image1.src}
      />
      <img
        className="hidden lg:block absolute right-96 bottom-0 h-36"
        src={image2.src}
      />
      <img className="absolute right-0 bottom-36 h-36" src={image3.src} />
      <div className="w-full h-fit flex flex-col sm:flex-row items-start justify-between">
        <BrandSection />

        <ResourceSection />

        <ProductsSection />

        <ContactSection />
      </div>
    </div>
  );
};

export default Footer;
