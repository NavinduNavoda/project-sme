import CardsContainer from "@/components/CardsContainer";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="m min-h-screen bg-lowwhite flex flex-col justify-center items-center">
        <h1 className="font-bold text-[60px] font-montserrat text-paragrapgh text-center mx-auto mb-12 w-[1300px]">
          <span className="text-accentsme ">Our mission </span> is to provide
          managers and leaders in the SME sector with the desired tools,
          frameworks, and expertise to help them create and execute their
          strategic plans successfully.
        </h1>
        <p className="text-[16px] text-paralight tracking-wide py-4 leading-relaxed mb-12 text-center">
          SME Strategic development company to be the pioneer in creating a mass
          network of lucrative and successful SME entrepreneurs <br /> in SRI
          LANKA to  the sustainable development of the Sri Lankan economy.
        </p>
      </div>
      <div className="px-4 sm:px-4 md:px-24 lg:px-40 py-24">
        <h1 className="font-bold pt-8 uppercase text-[28px] font-montserrat text-paragrapgh">
          Vision statement
        </h1>
        <p className="text-[16px] text-paralight tracking-wide py-4 leading-relaxed mb-12 ">
          SME Strategic development company to be the pioneer in creating a mass
          network of lucrative and successful SME entrepreneurs in SRI LANKA to 
          the sustainable development of the Sri Lankan economy.
        </p>
      </div>
    </div>
  );
};

export default About;
