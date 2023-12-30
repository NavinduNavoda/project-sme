"use client";
import CardsContainer from "@/components/CardsContainer";
import EbooksCardList from "@/components/EbooksCardList";
import CardList from "@/components/ServiceCardList";
import React from "react";
import { useServices } from "@/app/dataHolders/store";
import axios from "axios";

const Services = () => {
  const { services, setServices } = useServices();

  const refreshServices = async () => {
    try {
      const res = await axios.get("/api/services");
      console.log(res);
      setServices(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="px-4 sm:px-4 md:px-12 lg:px-24">
      <div>
        {/* services list */}
        <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] font-montserrat uppercase text-paragrapgh">
          Our services
        </h1>
        <p className="text-[12px] text-paralight tracking-wide py-4 leading-wide mb-12">
          Explore our diverse services, dedicated to enhancing your success and
          surpassing your expectations.
        </p>

        <CardList />

        {/* ebooks list */}

        <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] font-montserrat uppercase text-paragrapgh">
          Our EBOOKS
        </h1>
        <p className="text-[12px] text-paralight tracking-wide py-4 leading-wide mb-12">
          Dive into a wealth of knowledge with our exclusive eBooks, crafted to
          inspire, educate, and guide you on your path to success.
        </p>

        <EbooksCardList />

        <CardsContainer />
      </div>
    </div>
  );
};

export default Services;
