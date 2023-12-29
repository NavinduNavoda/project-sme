import AppointmentCardList from "@/components/AppointmentCardList";
import DocumentList from "@/components/DocumentList";
import EbooksCardList from "@/components/EbooksCardList";
import React from "react";

const page = () => {
  return (
    <div className="px-4 sm:px-4 md:px-24 lg:px-36">
      <div>
        <h1 className="font-bold text-[28px] font-montserrat uppercase text-paragrapgh pb-12">
          dashboard
        </h1>
        <h1 className="font-bold text-[28px] font-montserrat uppercase text-paragrapgh pb-12">
          Upcoming appointments
        </h1>
        <AppointmentCardList />
      </div>
      <div>
        <h1 className="font-bold text-[28px] font-montserrat uppercase text-paragrapgh pb-12">
          Your documents
        </h1>
        <DocumentList />
      </div>
      <div>
        <h1 className="font-bold text-[28px] font-montserrat uppercase text-paragrapgh pb-12">
          Your ebooks
        </h1>
        <EbooksCardList />
      </div>
    </div>
  );
};

export default page;
