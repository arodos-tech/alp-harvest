import React, { useEffect, useRef } from "react";

import Head from "next/head";
import { Component } from "react";

import Header from "widgets/header";
import MetaHead from "widgets/meta-head";
import Hero from "widgets/product-hero";
import Product from "widgets/product";
import Footer from "widgets/footer";

import bgImg from "../../../public/assets/bg-image.jpg";

import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

import AppStore from "AppStore";

import { reveal } from "AppActions";

type Props = { products: any };

const ProcessedMeat = ({ products }: Props) => {
  const [paddingClass] = AppStore("paddingClass");

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <div className="fixed h-screen w-full bg-[#111] overflow-hidden">
        <img
          className="h-full w-full  object-cover opacity-[0.15]"
          src={bgImg.src}
        />
      </div>
      <MetaHead title="Processed Meat | Alp Harvest" />
      <Header />
      <div>
        <Hero
          title={"Processed Meat"}
          heroImage={"assets/processed-meat.jpg"}
          animateClass="translateBottom"
        />
      </div>
      <div className={`z-10 relative overflow-hidden ${paddingClass}`}>
        {products.map((product: any, index: any) => (
          <div key={index}>
            <Product
              animateClass1="translateLeft"
              animateClass2="translateRight"
              data={product.data}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ProcessedMeat;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content/processedMeat"));

  const products = files.map((filename) => {
    const pathName = filename.replace(".md", "");
    const fileData = fs.readFileSync(
      path.join("content/processedMeat", filename)
    );
    const { data } = grayMatter(fileData);
    return {
      pathName,
      data,
    };
  });
  // console.log("productsM", products);

  return {
    props: { products },
  };
}
