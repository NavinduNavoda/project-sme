"use client";

import Image from "next/image";
// import Scroll from "@/components/ScrollButton";
import heroBg from "../../public/heroBackground.png";

// components
import { Button } from "@/components/ui/button";
import Posts from "@/components/ApiTest";
import Scroll from "@/components/ScrollButton";
import ServiceCardList from "@/components/ServiceCardList";

// bg-red-100 sm:bg-green-100 md:bg-yellow-100 lg:bg-slate-200 xl:bg-green-100 2xl:bg-red-100

export default function Home() {
  return (
    <main className="">
      <div>
        <div>
          <div className="px-4 sm:px-4 md:px-24 lg:px-40 pt-4 sm:pt-4 md:pt-4">
            <p className="text-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[30px] 2xl:text-[34px]  tracking-wide text-[#4C6575] font-black leading-none uppercase">
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
            <p className="absolute px-4 pt-2 sm:pt-4 md:pt-6 lg:pt-10 xl:pt-12 2xl:pt-12 sm:px-4 md:px-24 lg:px-40 text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] xl:text-[50px] 2xl:text-[64px] font-montserrat font-black text-white leading-none z-20 ">
              WE GUIDE <br />
              YOU EARN
            </p>
            {/* <div className="absolute px-4 sm:px-4 md:px-24 lg:px-40 z-20 w-full lg:mt-[150px] xl:mt-[170px] 2xl:mt-[200px] flex items-center justify-between">
              <div>
                <p className="text-white uppercase font-bold text-[10px] 2xl:text-[16px] w-[150px] sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] 2xl:w-[500px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
              <div className="flex z-20 gap-8">
                <Button className="bg-white text-paragrapgh rounded-[2px] hover:bg-accentsme">
                  CONTACT US
                </Button>
                <Button
                  className="rounded-[2px] bg-transparent text-white"
                  variant={"outline"}
                >
                  BOOK AND APPOINTMENT
                </Button>
              </div>
            </div> */}
            {/* <Scroll /> */}
            <Image
              src={heroBg}
              width={1920}
              alt="Hero background"
              className="top-1/2 transform -translate-y-1/4 cover z-0"
            />
          </div>
          {/* cards section */}
          <div className="px-4 sm:px-4 md:px-24 lg:px-40">
            <h1 className="font-bold text-[28px] font-montserrat text-paragrapgh">
              Our top services and products
            </h1>
            <p className="text-[12px] text-paralight tracking-wide py-4 leading-none mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor.
            </p>

            <ServiceCardList />
          </div>

          {/* <div>
            <h1>Fake API</h1>
            <Posts />
          </div> */}
        </div>
      </div>
    </main>
  );
}
