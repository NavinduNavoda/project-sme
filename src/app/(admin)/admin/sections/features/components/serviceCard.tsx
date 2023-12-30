import React from "react";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from '@/components/ui/card'
import { url } from "inspector";
import { Badge } from "@/components/ui/badge";

const ServiceCard = (props: any) => {
  return (
    <div>
      <div className="relative rounded-[5px] border-[1px] cursor-pointer hover:shadow-sm w-[250px] h-[320px] shadow-md">
        <div className="w-[100%]">
          <div
            className=" h-[150px] w-[100%] bg-cover rounded-t-[5px]"
            style={{
              backgroundImage: `url(uploaded/${
                props.type == "book"
                  ? "books"
                  : props.type == "service"
                  ? "services"
                  : ""
              }/${props.data?._id}/${props.data?.thumbnail})`,
            }}
          ></div>
          <div className=" px-[20px] py-[10px]">
            <h1 className=" font-semibold text-[20px]">{props.data?.title}</h1>
            <p className=" font-light text-[16px] opacity-[.8] mt-[5px]">
              {props.data?.description.substring(0, 60)}
            </p>
            <div className=" absolute bottom-[15px] right-[20px] text-right">
              <div className=" text-accentsme text-[16px] font-semibold">
                Rs.{props.data?.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
