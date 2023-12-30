import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./smeLogo.svg";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-lowwhite text-white px-4 sm:px-4 md:px-24 lg:px-40 py-12">
        <div className="flex md:flex-row flex-col items-center sm:items-center ">
          <div className="w-full px-4">
            <div className="pb-12">
              <Link href="/">
                <Image
                  src={logo}
                  height={50}
                  alt="Picture of the author"
                  className="pb-2 mx-auto md:mx-0"
                />
              </Link>
              <p className="text-[14px] text-paralight tracking-wide pt-6 leading-wide sm:px-24 md:px-0 md:mr-16 text-center md:text-left xl:w-[500px]">
                Unlock the full potential of your business with our expert
                guidance. We are committed to steering you towards financial
                prosperity and strategic growth. Partner with us, and let's
                embark on a journey where your aspirations meet achievement.
              </p>
            </div>
            <div className="text-center text-accentsme font-montserrat font-bold text-[12px] pb-6 md:mx-0 md:text-left">
              <Link href="../">
                <p className="pb-4 hover:text-paragrapgh duration-300 ">HOME</p>
              </Link>
              <Link href="../about">
                <p className="py-4 hover:text-paragrapgh duration-300 ">
                  ABOUT US
                </p>{" "}
              </Link>
              <Link href="../contact">
                <p className="py-4 hover:text-paragrapgh duration-300 ">
                  CONTACT US
                </p>
              </Link>
            </div>
          </div>
          <div className="border-l border-gray-500 h-[600px] hidden sm:hidden"></div>

          <div className="w-1/2">
            <h1 className="font-montserrat text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] font-black text-paragrapgh uppercase pt-4 pb-4 text-center md:mx-0 md:text-left">
              Let’s Discuss Your{" "}
              <span className=" text-accentsme">business.</span>
            </h1>
            <div className="grid w-full gap-2">
              <Textarea placeholder="Please provide us with your email, and we will contact you soon." />
              <Button className=" bg-paragrapgh rounded-[2px]">Send</Button>
            </div>
            <div className="flex lg:p-5 py-5  justify-between sm:px-12 md:px-2 lg:px-12 sm:gap-8">
              <FaInstagram
                size={30}
                className="cursor-pointer text-[#4A6373] hover:text-yellow-600"
              />
              <FaTwitter
                size={30}
                className="cursor-pointer text-[#4A6373] hover:text-blue-600"
              />
              <FaLinkedin
                size={30}
                className="cursor-pointer text-[#4A6373] hover:text-blue-600"
              />
              <FaYoutube
                size={30}
                className="cursor-pointer text-[#4A6373] hover:text-red-600"
              />
            </div>
          </div>
        </div>
        <p className="text-[12px] font-bold text-[#8898A2] tracking-wide py-4 mx-auto md:mx-0 leading-wide text-center w-72 sm:w-72  md:text-left">
          ©2024 SME Strategic Development. <br /> All rights reserved. <br />{" "}
          Designed and Developed By{" "}
          <span className="hover:text-[#A7D707] duration-500">Tringledo.</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
