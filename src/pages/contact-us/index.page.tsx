import styles from "assets/styles/underline.module.css";

import AppStore from "AppStore";
import React, { useState } from "react";
import Header from "widgets/header";
import MetaHead from "widgets/meta-head";

import LocationIcon from "assets/svg/LocationIcon";
import MailIcon from "assets/svg/MailIcon";
import PhoneIcon from "assets/svg/PhoneIcon";
import Link from "next/link";
import FaceBookIcon from "assets/svg/FaceBookIcon";
import InstagramIcon from "assets/svg/InstagramIcon";
import WhatsappIcon from "assets/svg/WhatsappIcon";
import Footer from "widgets/footer";
import YoutubeIcon from "assets/svg/YoutubeIcon";
import Toastify, { Toast } from "widgets/toast";

import { sendMail } from "./actions";

type Props = {};

const ContactUs = (props: Props) => {
  const [paddingClass] = AppStore("paddingClass");

  const [fields, setFields] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    sendMail(fields, (error: any, message: any) => {
      if (!error) {
        setIsLoading(false);
        setFields({});
        Toast("success", message);
      } else {
        setIsLoading(false);
        Toast("error", message);
      }
    });
  };

  return (
    <>
      <Header />
      <MetaHead title="Contact Us" />
      <div className={`w-full min-h-screen flex flex-col items-center bg-[#111] pb-20`}>
        <div
          className={`w-full h-[45rem] md:h-[35rem] flex items-center justify-center contactBgImg bg-black pt-20 ${paddingClass}`}
        >
          <div className="absolute w-full md:w-[50rem] xl:w-[65rem] h-fit flex flex-col translate-y-64 md:translate-y-52 px-6">
            <div className="sm:w-96 flex flex-col space-y-5 pb-7">
              <p className="text-4xl text-white font-family-title font-medium whitespace-nowrap">Get In Touch</p>
              <p className="text-lg leading-6 text-white">Leave us your info and {`we'll`} get back to you</p>
            </div>
            <div className="w-full h-fit md:h-[35rem] flex flex-wrap bg-[#00000066] text-white rounded-2xl border-2 border-[#ffffff22] overflow-hidden">
              <form
                onSubmit={(e: any) => handleSendMail(e)}
                className="w-full md:w-[55%] lg:w-3/5 md:h-full flex flex-wrap items-center md:items-start justify-center p-7 md:py-12"
              >
                <p className="w-full text-3xl font-medium whitespace-normal pb-5">Send Us a Message</p>
                <div className="w-full sm:w-1/2 p-2 md:p-0 md:pr-4">
                  <input
                    type="text"
                    className="w-full h-12 placeholder-secondary p-2 border-2 border-[#ffffff33] bg-transparent hover:border-white rounded-md outline-none transition-all duration-300"
                    placeholder="Enter Name"
                    required
                    onChange={(e: any) => {
                      fields.name = e.target.value;
                      setFields({ ...fields });
                    }}
                    value={fields.name || ""}
                  />
                </div>

                <div className="w-full sm:w-1/2 p-2 md:p-0 md:pl-4">
                  <input
                    type="text"
                    className="w-full h-12 placeholder-secondary p-2 border-2 border-[#ffffff33] bg bg-transparent hover:border-white rounded-md outline-none transition-all duration-300"
                    placeholder="Enter Email Id"
                    required
                    onChange={(e: any) => {
                      fields.email = e.target.value;
                      setFields({ ...fields });
                    }}
                    value={fields.email || ""}
                  />
                </div>

                <div className="w-full p-2 md:p-0 ">
                  <textarea
                    className="w-full h-24 placeholder-secondary p-2 border-2 border-[#ffffff33] bg bg-transparent hover:border-white rounded-md outline-none transition-all duration-300"
                    placeholder="Enter Your Message Here"
                    required
                    onChange={(e: any) => {
                      fields.message = e.target.value;
                      setFields({ ...fields });
                    }}
                    value={fields.message || ""}
                  />
                </div>
                <div className="w-full flex items-center justify-center pt-3">
                  <button
                    disabled={isLoading}
                    className="w-2/3 h-14 rounded-md bg-[#ffffff] text-xl text-black font-extrabold font-family-title hover:scale-95 transition-all duration-500"
                  >
                    {isLoading ? <div className={`${styles.btnLoadingSpinner}`}></div> : "SUBMIT"}
                  </button>
                </div>
              </form>
              <div className="w-full md:w-[45%] lg:w-2/5 md:h-full bg-[#00000033] flex flex-col items-start justify-center md:justify-start p-7 md:py-12 space-y-4">
                <p className="text-3xl font-medium pb-4 md:pb-7">Contact Information</p>
                <div className="w-full flex space-x-4">
                  <LocationIcon style={"h-7 w-7"} />
                  <p className="flex-1 text-lg">
                    Saukuchi tiniali,
                    <br />
                    Opp betkuchi high school,
                    <br />
                    Lokhra- lalganesh road,
                    <br />
                    Guwahati - 781040
                  </p>
                </div>
                <div className="w-full flex space-x-4">
                  <MailIcon style={"h-6 w-6"} />
                  <p className="flex-1 text-lg tracking-tighter">dhrubajyoti.kakoti@bonphul-foods.com</p>
                </div>
                <div className="w-full flex space-x-4">
                  <PhoneIcon color={"#fff"} h={26} w={26} />
                  <p className="flex-1 text-lg">+91 70990 65777</p>
                </div>
                <div className="flex justify-center fill-white space-x-10 pt-5 md:pt-12">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/Minbury-Farms-109359341759289/"
                    className="lg:hover:cursor-pointer hover:scale-125"
                  >
                    <FaceBookIcon style="w-8 h-8" />
                  </a>
                  <a
                    target="_blank"
                    href="https://instagram.com/minbury_food?igshid=YmMyMTA2M2Y="
                    className="lg:hover:cursor-pointer hover:scale-125"
                  >
                    <InstagramIcon style={"w-8 h-8"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full h-[30rem] md:h-[20rem] flex items-center justify-center`}></div>
      </div>
      <Footer />
      <Toastify />
    </>
  );
};

export default ContactUs;
