import React from "react";
import Contactcard from "./Contactcard";
import EmailCard from "./EmailCard";
import AddressCard from "./AddressCard";

const ContactUsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-between gap-8 px-4 sm:px-4 md:px-24 lg:px-40 pb-12">
      <EmailCard />
      <Contactcard />
      <AddressCard />
    </div>
  );
};

export default ContactUsList;
