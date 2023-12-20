import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-24 justify-between">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
