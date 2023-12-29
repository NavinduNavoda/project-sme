"use client";

import Image from "next/image";
import heroBg from "../../../public/bgnew.png";
import "../custom.css";

// components
import ServiceCardList from "@/components/ServiceCardList";
import Accordian from "@/components/Accordian";
import Timeline from "@/components/Timeline";
import Scroll from "@/components/ScrollButton";
import { Button } from "@/components/ui/button";

//bg-red-100 sm:bg-green-100 md:bg-yellow-100 lg:bg-slate-200 xl:bg-green-100 2xl:bg-red-100

export default function Home() {
  return (
    <main className="">
      <div className="mb-32 sm:mb-12 md:mb-0">
        <div className="px-4 sm:px-4 md:px-24 lg:px-40 pt-4 sm:pt-4 md:pt-4">
          <p className="text-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[30px] 2xl:text-[34px] tracking-wide text-[#4C6575] font-black leading-none uppercase">
            your trusted partner for <br />
            achieving your strategic <br /> development
          </p>
        </div>
        <div>
          <div className="flex">
            <p className="relative px-4 sm:px-4 md:px-24 lg:px-40 text-[70px] sm:text-[100px] md:text-[110px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] font-montserrat font-black text-accentsme leading-none z-20">
              GOALS
            </p>
            <Scroll />
          </div>
          <p className="absolute px-4 pt-2 sm:pt-4 md:pt-6 lg:pt-10 xl:pt-12 2xl:pt-12 sm:px-4 md:px-24 lg:px-40 text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] xl:text-[50px] 2xl:text-[64px] font-montserrat font-black text-white leading-none z-20">
            WE GUIDE <br />
            YOU EARN
          </p>
          <div className="absolute px-4 sm:px-4 md:px-24 lg:px-40 z-20 w-full lg:mt-[150px] xl:mt-[170px] 2xl:mt-[200px] lg:flex xl:flex 2xl:flex items-center justify-between mt-24">
            <div>
              <p className="text-white uppercase font-bold text-[10px] 2xl:text-[16px] w-[200px] sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] 2xl:w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
            </div>

            <div className="flex z-20 gap-8 mt-4 sm:mt-4 md:mt-4 lg:mt-0">
              <Button className="bg-white text-paragrapgh rounded-[2px] hover:bg-accentsme w-auto text-[10px] h-[35px] lg:text-[16px] lg:h-[50px]">
                CONTACT US
              </Button>
              <Button
                className="rounded-[2px] bg-transparent text-white text-[10px] h-[35px] lg:text-[16px] lg:h-[50px]"
                variant={"outline"}
              >
                BOOK AN APPOINTMENT
              </Button>
            </div>
          </div>

          <Image
            src={heroBg}
            alt="Hero background"
            className="top-1/2 transform -translate-y-[25px] sm:-translate-y-[35px] md:-translate-y-[40px] lg:-translate-y-[50px] xl:-translate-y-[70px] 2xl:-translate-y-[90px] z-0 h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] xl:h-[400px] 2xl:h-[525px]"
            id="heroImg"
          />
        </div>
      </div>

      {/* ############# hero section ends ############### */}

      {/* cards section */}
      <div className="px-4 sm:px-4 md:px-24 lg:px-36">
        <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] font-montserrat uppercase text-paragrapgh">
          Our top services and products
        </h1>
        <p className="text-[12px] text-paralight tracking-wide py-4 leading-wide mb-12 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor.
        </p>

        <ServiceCardList />
      </div>

      {/* appointment section */}
      <div className="px-4 sm:px-4 md:px-24 lg:px-40">
        <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] font-montserrat uppercase text-paragrapgh">
          BOOK AN APPOINTMENT FOR,
        </h1>
        <p className="text-[12px] text-paralight tracking-wide py-4 leading-wide mb-12">
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
        </div>
      </section>

      <div className="px-4 sm:px-4 md:px-24 lg:px-40">
        <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] font-montserrat uppercase text-paragrapgh">
          how to book an appointment
        </h1>
        <p className="text-[12px] text-paralight tracking-wide py-4 leading-wide mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor onsectetur adipiscing elit. Sed do.
        </p>
      </div>
      <Timeline />
    </main>
  );
}

// bg-red-100 sm:bg-green-100 md:bg-yellow-100 lg:bg-slate-200 xl:bg-green-100 2xl:bg-red-100
