import React, { useState } from "react";
import ChevronLeft from "assets/svg/ChevronLeft";
import ChevronRight from "assets/svg/ChevronRight";

import aboutImg1 from "../../../public/assets/cheesy-corn-dish.png";
import aboutImg2 from "../../../public/assets/prawn-noodles.png";

type Props = { data: any; animateClass1: any; animateClass2: any };

const About = ({ data, animateClass1, animateClass2 }: Props) => {
  const [toggle, setToggle] = useState(1);

  // f7c156e2;
  // 663a07af
  return (
    <div className="h-fit w-full flex flex-wrap items-center justify-center aboutBgImg bg-[#333]">
      <div
        className={`${animateClass2} w-full lg:w-2/6 h-fit flex flex-wrap items-center justify-center p-4 lg:p-8`}
      >
        <div className="w-1/2 lg:w-full h-full lg:h-1/2 flex items-center justify-center lg:justify-end">
          <img className="w-72 object-cover" src={aboutImg1.src} />
        </div>
        <div className="w-1/2 lg:w-full h-full lg:h-1/2 flex items-center justify-center lg:justify-end">
          <img className="w-72 object-cover" src={aboutImg2.src} />
        </div>
      </div>
      <div className="w-full lg:w-4/6 h-fit  bg-[#11111199] flex items-center justify-center lg:justify-start md:p-4 xl:p-8 overflow-hidden">
        <div
          className={`${animateClass1} h-fit w-full flex flex-col items-center justify-center p-4 xl:p-14 text-white space-y-7`}
        >
          <p className="text-4xl lg:text-5xl font-semibold font-family-title text-center">
            {data.title}
          </p>
          <div className="w-full flex items-center gap-5 2xl:gap-8">
            <div
              onClick={() => setToggle(1)}
              className="w-20 h-20 absolute left-2 md:relative opacity-50 md:opacity-100 rounded-full cursor-pointer active:scale-90 transition-all duration-500"
            >
              <ChevronLeft style={"w-20 h-20 fill-white"} />
            </div>
            <div className="flex-1 flex items-start justify-center">
              <div
                className={`w-full h-full flex-col space-y-4  ${
                  toggle == 1
                    ? "flex opacity-100"
                    : "opacity-0 scale-0 absolute -translate-x-full"
                } transition-all duration-700 ease-in-out`}
              >
                {data.body.map((bod: any, index: any) => {
                  if (index < data.body.length / 2)
                    return (
                      <p
                        key={index}
                        className="w-full lg:text-xl text-justify font-medium text-[#eee]"
                      >
                        {bod.para}
                      </p>
                    );
                })}
              </div>
              <div
                className={`w-full h-full flex-col space-y-6 ${
                  toggle == 2
                    ? "flex opacity-100"
                    : "opacity-0 scale-0 absolute translate-x-full"
                } transition-all duration-700 ease-in-out`}
              >
                {data.body.map((bod: any, index: any) => {
                  if (index >= data.body.length / 2)
                    return (
                      <p
                        key={index}
                        className="w-full lg:text-xl text-justify font-medium text-[#eee]"
                      >
                        {bod.para}
                      </p>
                    );
                })}
              </div>
            </div>
            <div
              onClick={() => setToggle(2)}
              className="w-20 h-20 absolute right-2 md:relative opacity-50 md:opacity-100 rounded-full cursor-pointer active:scale-90 transition-all duration-500"
            >
              <ChevronRight style={"w-20 h-20 fill-white"} />
            </div>
          </div>
          {/* <p className="text-sm text-justify">{data.body}</p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
