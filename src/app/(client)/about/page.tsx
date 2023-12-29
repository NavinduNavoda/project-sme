import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="m min-h-screen bg-lowwhite flex flex-col justify-center items-center px-4 sm:px-4 md:px-24 lg:px-40">
        <h1 className="font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px]  xl:mx-auto font-montserrat text-paragrapgh text-center mx-auto mt-16 mb-0 w-auto">
          <span className="text-accentsme ">Our mission </span> is to provide
          managers and leaders in the SME sector with the desired tools,
          frameworks, and expertise to help them create and execute their
          strategic plans successfully.
        </h1>
        <p className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] xl:w-[900px] text-paralight tracking-wide py-4 leading-relaxed mb-12 text-center">
          SME Strategic development company to be the pioneer in creating a mass
          network of lucrative and successful SME entrepreneurs in SRI LANKA to 
          the sustainable development of the Sri Lankan economy.
        </p>
      </div>
      <div className="px-4 sm:px-4 md:px-24 lg:px-40 py-24">
        <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] font-montserrat uppercase text-paragrapgh">
          Vision statement
        </h1>

        <p className="text-[12px] text-paralight tracking-wide py-4 leading-wide mb-12">
          SME Strategic development company to be the pioneer in creating a mass
          network of lucrative and successful SME entrepreneurs in SRI LANKA to 
          the sustainable development of the Sri Lankan economy.
        </p>
      </div>
    </div>
  );
};

// text-[60px]
// w-[1300px]
export default About;
