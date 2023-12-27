import AddressCard from "@/components/AddressCard";
import ContactUsList from "@/components/ContactUsList";
import Contactcard from "@/components/Contactcard";
import EmailCard from "@/components/EmailCard";
import React from "react";

const Contact = () => {
  return (
    <div className="mb-12">
      <div className="bg-lowwhite min-h-screen flex flex-col justify-center items-center pt-12">
        <h1 className="font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px]  xl:mx-auto font-montserrat text-paragrapgh text-center mx-auto w-auto">
          Contact us
        </h1>
        <p className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] xl:w-[900px] text-paralight tracking-wide py-4 leading-relaxed mb-12 text-center">
          Here’s how you can contact us
        </p>
        <ContactUsList />
      </div>
      <div className="px-4 sm:px-4 md:px-24 lg:px-40 py-24 ">
        <h1 className="font-bold pt-8 uppercase text-[28px] font-montserrat text-paragrapgh">
          Reach out to us
        </h1>
        <p className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-paralight tracking-wide py-4 leading-relaxed mb-12 ">
          At SME, we welcome your inquiries and value the opportunity to connect
          with you. We are here to assist you with tailored solutions that meet
          your unique business needs. Whether you have questions about our
          services, want to discuss a potential collaboration, or seek expert
          advice, we are just a message away.
        </p>
      </div>
    </div>
  );
};

export default Contact;
