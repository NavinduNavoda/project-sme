import React from "react";
import EbooksCard from "./EbooksCard";

const EbooksCardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-24 justify-between">
      <EbooksCard />
      <EbooksCard />
      <EbooksCard />
      <EbooksCard />
      <EbooksCard />
      <EbooksCard />
    </div>
  );
};

export default EbooksCardList;
