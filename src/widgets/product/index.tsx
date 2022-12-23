import React from "react";

type Props = {
  animateClass1?: any;
  animateClass2?: any;
  smoothScroll?: any;
  data?: any;
};

const Product = ({
  animateClass1,
  animateClass2,
  smoothScroll,
  data,
}: Props) => {
  return (
    <div className="h-fit lg:h-screen w-full flex flex-wrap items-center justify-center">
      <div
        className={`${animateClass1} w-full lg:w-5/12 flex items-center justify-center lg:justify-end p-4`}
      >
        <img
          style={{ filter: "drop-shadow(5px 5px 20px #333333a0)" }}
          src={data.image}
        />
      </div>
      <div
        className={`${animateClass2} w-full lg:w-7/12 flex flex-col items-center lg:items-start justify-center space-y-5 p-4`}
      >
        <p className="text-5xl font-semibold text-secondary font-serif">
          {data.name}
        </p>
        <div className="w-full flex flex-col space-y-2">
          {data.description.map((des: any, index: any) => (
            <div className="w-full flex space-x-1">
              <p className="h-full">-</p>
              <p
                key={index}
                className="text-lg text-left font-semibold text-secondary leading-6"
              >
                {des.para}
              </p>
            </div>
          ))}
        </div>
        {/* <p className="text-xl text-center lg:text-left font-semibold text-yellow-800 pb-4">
          {data.description}
        </p> */}
        <div className="w-full flex flex-col items-start justify-start pt-4">
          <p className="text-2xl font-bold font-serif text-amber-900 border-b-2 border-amber-900 mb-3">
            Variants
          </p>
          {data.varieties.map((variety: any, index: any) => (
            <div className="w-full flex space-x-2">
              <p className="h-full text-black">o</p>
              <p
                key={index}
                className="font-semibold text-lg text-black tracking-wider"
              >
                {variety.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
