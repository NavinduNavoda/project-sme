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
      <footer className="bg-lowwhite text-white  px-4 sm:px-4 md:px-24 lg:px-40 py-12">
        <div className=" mx-auto flex md:flex-row flex-col">
          <div className="w-1/2">
            <div className="pb-12">
              <Link href="/">
                <Image
                  src={logo}
                  height={50}
                  alt="Picture of the author"
                  className="pb-2"
                />
              </Link>
              <p className="text-[14px] text-paralight tracking-wide py-4 leading-wide w-96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim.{" "}
              </p>
            </div>
            <div className="flex justify-between mr-12">
              <div>
                <ul>
                  <p className="text-accentsme font-montserrat font-bold text-[16px] pb-4">
                    SERVICES
                  </p>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <p className="text-accentsme font-montserrat font-bold text-[16px] pb-4">
                    SERVICES
                  </p>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <p className="text-accentsme font-montserrat font-bold text-[16px] pb-4">
                    SERVICES
                  </p>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <p className="text-accentsme font-montserrat font-bold text-[16px] pb-4">
                    SERVICES
                  </p>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                  <li className="text-[14px] text-paralight tracking-wide py-2 leading-none">
                    Service #1
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-[14px] font-bold text-[#8898A2] tracking-wide py-12 leading-wide w-96">
              ©2023 SME Strategic Development . All rights reserved. Designed
              and Developed By Tringledo.
            </p>
          </div>
          <div className="border-l border-gray-500 h-[600px]"></div>

          <div className="w-1/2 pl-24">
            <h1 className="font-montserrat text-[40px] font-black text-paragrapgh uppercase pb-4">
              Let’s Discuss Your{" "}
              <span className=" text-accentsme">business.</span>
            </h1>
            <div className="grid w-full gap-2">
              <Textarea placeholder="Please provide us with your email, and we will contact you soon." />
              <Button className=" bg-paragrapgh">Send</Button>
            </div>
            <div className="flex gap-6 py-5">
              <FaInstagram
                size={35}
                className="text-2xl cursor-pointer text-[#4A6373] hover:text-yellow-600"
              />
              <FaTwitter
                size={35}
                className="text-2xl cursor-pointer text-[#4A6373] hover:text-blue-600"
              />
              <FaLinkedin
                size={35}
                className="text-2xl cursor-pointer text-[#4A6373] hover:text-blue-600"
              />
              <FaYoutube
                size={35}
                className="text-2xl cursor-pointer text-[#4A6373] hover:text-red-600"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
