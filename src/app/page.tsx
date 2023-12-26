"use client";

import Image from "next/image";
// import Scroll from "@/components/ScrollButton";
import heroBg from "../../public/heroBackground.png";

// components
import ServiceCardList from "@/components/ServiceCardList";
import Accordian from "@/components/Accordian";
import Timeline from "@/components/Timeline";
import svgPath from "../../public/timelinebg.svg";
import "./hutta.css";
import Scroll from "@/components/ScrollButton";

//bg-red-100 sm:bg-green-100 md:bg-yellow-100 lg:bg-slate-200 xl:bg-green-100 2xl:bg-red-100

export default function Home() {
  return (
    <main className="">
      <div className="h-screen" id="hutta">
        <div className="relative px-4 sm:px-4 md:px-24 lg:px-40 pt-4 sm:pt-4 md:pt-4">
          <div className="flex w-full h-screen m-auto relative">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full z-0"></div>

            <div className="w-2/3 p-4 z-10 relative">
              <p className="text-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[30px] 2xl:text-[34px]  tracking-wide text-[#4C6575] font-black leading-none uppercase">
                your trusted partner for <br />
                achieving your strategic <br /> development
              </p>
              <p className="relative text-[70px] sm:text-[100px] md:text-[110px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] font-montserrat font-black text-accentsme leading-none z-20">
                GOALS
              </p>

              <p className="absolute pt-2 sm:pt-4 md:pt-6 lg:pt-10 xl:pt-12 2xl:pt-12 text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] xl:text-[50px] 2xl:text-[64px] font-montserrat font-black text-white leading-none z-20">
                WE GUIDE <br />
                YOU EARN
              </p>
            </div>
            <div className="p-4 w-1/3 ml-[-50px] relative z-0"></div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-4 md:px-24 lg:px-40">
        <h1 className="font-bold pt-8 text-[28px] font-montserrat text-paragrapgh">
          BOOK AN APPOINTMENT FOR,
        </h1>
        <p className="text-[12px] text-paralight tracking-wide py-4 leading-none mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor onsectetur adipiscing elit. Sed do.
        </p>
      </div>
      <section className="flex items-start justify-center mb-10">
        <div className="flex px-4 sm:px-4 md:px-24 lg:px-40 items-start w-full ">
          <div className="2xl:block hidden  items-center justify-center w-1/2">
            <img
              className=""
              src="../../../appointmentimg.png"
              alt="appointment image"
              height="auto"
            ></img>
          </div>
          <div className="w-full 2xl:w-1/2 px-8 md:px-16 mx-auto">
            <Accordian />
          </div>
          {/* image */}
        </div>
      </section>

      <div className="px-4 sm:px-4 md:px-24 lg:px-40">
        <h1 className="font-bold pt-8 text-[28px] font-montserrat uppercase text-paragrapgh">
          how to book an appointment
        </h1>
        <p className="text-[12px] text-paralight tracking-wide py-4 leading-none ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor onsectetur adipiscing elit. Sed do.
        </p>
      </div>

      <Timeline />
      <Image
        src={svgPath}
        width={1920}
        alt="Hero background"
        className="top-1/2 transform -translate-y-1/4 cover z-0"
      />
    </main>
  );
}

// bg-red-100 sm:bg-green-100 md:bg-yellow-100 lg:bg-slate-200 xl:bg-green-100 2xl:bg-red-100
