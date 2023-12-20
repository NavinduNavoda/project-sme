import CardsContainer from "@/components/CardsContainer";
import EbooksCardList from "@/components/EbooksCardList";
import CardList from "@/components/ServiceCardList";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="px-4 sm:px-4 md:px-24 lg:px-40">
        {/* services list */}
        <h1 className="font-bold text-[28px] font-montserrat text-paragrapgh">
          Our services
        </h1>
        <p className="text-[12px] text-paralight tracking-wide py-4 leading-none mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <CardList />

        {/* ebooks list */}

        <h1 className="font-bold text-[28px] font-montserrat text-paragrapgh">
          Our services
        </h1>
        <p className="text-[12px] text-paralight tracking-wide py-4 leading-none mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <EbooksCardList />

        <CardsContainer />
      </div>
    </div>
  );
};

export default Services;
