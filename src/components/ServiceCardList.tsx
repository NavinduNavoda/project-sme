"use client"

import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

import { Checkbox } from "@/components/ui/checkbox";

import axios from "axios";

import { useServices } from "@/app/dataHolders/store";

const Services = (props: any) => {
  const [addCardDrawer, setAddCardDrawer] = useState(false);

  const [usingServiceId, setUsingServiceId] = useState("");
  const { services, setServices } = useServices();

  useEffect(() => {
    refreshServices();
  }, []);

  interface serviceInterface {
    title: string;
    description: string;
    yt: string;
    price: string;
    top: boolean;
    content: string;
    thumbnail: File | undefined;
    pic: File | undefined;
  }

  const [serviceDetails, setServiceDetaills] = useState<serviceInterface>({
    title: "",
    description: "",
    yt: "",
    price: "",
    top: false,
    content: "",
    thumbnail: undefined,
    pic: undefined,
  });

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-24 justify-between">
      {services.map((e, i) => {
        return (
          <div>
            <ServiceCard data={e} type="service" />
          </div>
        );
      })}
    </div>
  );
};

export default Services;
