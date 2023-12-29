import React from "react";
import AppointmentCard from "./AppointmentCard";

const AppointmentCardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-24 justify-between">
      <AppointmentCard />
      <AppointmentCard />
    </div>
  );
};

export default AppointmentCardList;
