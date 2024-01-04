import React from "react";
import clientImg from "../../../../public/clientImg.png";
import Image from "next/image";
import Quote from "../../../../public/quote.png";

const About = () => {
  return (
    <div className="">
      <div className="min-h-screen bg-lowwhite flex flex-col justify-center items-center px-4 sm:px-4 md:px-24 lg:px-40">
        <h1 className="font-bold text-[20px] sm:text-[20px] md:text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] xl:mx-auto font-montserrat text-accentsme text-center mx-auto pb-8 mb-0 w-auto uppercase">
          Our misson
        </h1>
        <h1 className="font-bold text-[20px] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[30px] 2xl:text-[30px] xl:mx-auto font-montserrat text-paragrapgh text-center mx-auto  mb-0 w-auto">
          Our mission is to provide managers and leaders in the SME sector with
          the desired tools, frameworks, and expertise to help them create and
          execute their strategic plans successfully.
        </h1>

        <h1 className="font-bold text-[20px] sm:text-[20px] md:text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] xl:mx-auto font-montserrat text-accentsme text-center mx-auto pt-16 pb-8 mb-0 w-auto uppercase">
          Our vision
        </h1>
        <h1 className="font-bold text-[20px] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[30px] 2xl:text-[30px]  xl:mx-auto font-montserrat text-paragrapgh text-center mx-auto  mb-0 w-auto">
          SME Strategic development company to be the pioneer in creating a mass
          network of lucrative and successful SME entrepreneurs in SRI LANKA to 
          the sustainable development of the Sri Lankan economy.
        </h1>
      </div>
      <section className="flex items-start justify-center">
        <div className="flex px-4 sm:px-4 md:px-24 lg:px-40 items-start w-full ">
          <div className="w-full 2xl:w-1/2 px-8 md:px-16 mx-auto py-12">
            <div>
              <h1 className=" text-accentsme text-[30px] xl:text-[60px] font-montserrat font-black uppercase leading-tight">
                I’ll Make your dream business come true.
              </h1>
              <div className="relative">
                <Image
                  src={Quote}
                  alt="quote"
                  className="absolute h-24 w-auto mt-10 z-0"
                ></Image>
                <p className="text-paralight text-[14px] xl:text-[16px] pt-12 relative pl-5 max-w-[600px] z-10">
                  We are a strategic SME company dedicated to delivering
                  innovative solutions tailored to meet the unique needs of our
                  clients. With a focus on strategic planning and execution, we
                  leverage our expertise to drive business growth and enhance
                  organizational effectiveness. Our commitment to excellence,
                  coupled with a client-centric approach, positions us as a
                  trusted partner in navigating the challenges and opportunities
                  of today's dynamic business landscape.
                </p>
              </div>
            </div>
            <div className="2xl:mt-20 mt-20">
              <h1 className="font-bold text-paragrapgh text-[14px] xl:text-[16px]">
                Mr. Chandika
              </h1>
              <p className=" text-paragrapgh text-[14px] xl:text-[16px]">
                Owner
              </p>
            </div>
          </div>
          <div className="2xl:flex 2xl:items-center 2xl:justify-center hidden w-1/2">
            <Image
              src={clientImg}
              alt="clientImg"
              className="h-[700px] w-auto"
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
