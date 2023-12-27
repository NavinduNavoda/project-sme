import Contactcard from "@/components/Contactcard";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className=" bg-lowwhite flex flex-col justify-center items-center px-4 sm:px-4 md:px-24 lg:px-40">
        <h1 className="font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px]  xl:mx-auto font-montserrat text-paragrapgh text-center mx-auto mb-12 w-auto">
          Contact us
        </h1>
        <p className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] xl:w-[900px] text-paralight tracking-wide py-4 leading-relaxed mb-12 text-center">
          Here’s how you can contact us
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-24 justify-between mx-auto items-center">
          <Contactcard />
          <Contactcard />
          <Contactcard />
        </div>
      </div>
    </div>
  );
};

export default Contact;
