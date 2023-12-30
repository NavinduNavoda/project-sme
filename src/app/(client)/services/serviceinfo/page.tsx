import React from "react";
import clothing from "../../../../../public/clothing.png";
import clothing2 from "../../../../../public/clothing 2.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EbooksCardList from "@/components/EbooksCardList";
import "../../../custom.css";

const ServiceInfo = () => {
  return (
    <div className="">
      <div className=" md:px-12 lg:px-24">
        <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] font-montserrat uppercase text-paragrapgh my-12 px-4 sm:px-4">
          BOOK AN APPOINTMENT FOR,
        </h1>
        <header className="hero mb-12 md:mb-24">
          <div className="hero-inner flex flex-col items-center">
            <h1 className="font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-montserrat text-paragrapgh text-center md:px-12 lg:px-24 pb-12 w-[350px] md:w-auto ">
              Unveiling Your Business&apos;s Radiant Potential: Cosmetic Consultancy
              for Success!
            </h1>
            <Button className="bg-accentsme hover:bg-accentsmehover hover:scale-110 transition duration-700">
              Build now
            </Button>
          </div>
        </header>
        <div className="flex flex-col xl:flex-row px-4 sm:px-4 pb-12">
          <div className="w-full ">
            <p className="text-[14px] md:text-[20px] text-paralight tracking-wide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              voluptates doloremque autem, iusto temporibus nam incidunt omnis
              eaque fugit laborum molestias facilis, expedita eum odio deserunt
              iste cum! Aliquid, consectetur! Pariatur nulla explicabo itaque
              velit aut necessitatibus officiis perferendis labore, omnis
              inventore! Suscipit quisquam porro ratione in iusto ipsam
              consectetur modi aperiam quo ipsum fugit delectus quod nisi, quae
              officiis? Expedita sit optio autem dolorum voluptatibus possimus
              sed, cumque fuga eos, iste dolores nesciunt, maiores ullam amet
              repudiandae ad nulla explicabo doloremque ducimus repellendus.
              Perspiciatis dolorem unde quisquam hic inventore. Corrupti,
              magnam! Excepturi quidem eligendi incidunt nihil adipisci aperiam
              corporis ducimus exercitationem. Placeat ipsam reprehenderit ex
              consectetur saepe. Saepe at esse harum, quidem quae facere ad
              dignissimos ipsum nulla illo! Accusantium doloremque in sit
              inventore est aspernatur amet, eveniet aliquam quae libero
              reiciendis mollitia doloribus ex repellendus, aut fugiat
              asperiores commodi minus. Similique molestiae id fugiat voluptas
              aut assumenda necessitatibus!
            </p>
          </div>

          <div className="w-full md:w-full mx-auto md:pl-12 ">
            <iframe
              src="https://www.youtube.com/embed/pZ4mSs6KoE4?si=BIV64ReXC5KW6e2w"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="mx-auto mt-12 md:pt-12 md:my-0 mb-12 md:mb-12 w-[300px] h-[200px] md:w-full md:h-[400px] xl:w-[600px] xl:h-[350px]"
            ></iframe>
          </div>
        </div>

        <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] font-montserrat uppercase text-paragrapgh mb-12 md:mb-12 px-4 sm:px-4">
          Explore our recommended ebooks
        </h1>
        <EbooksCardList />
      </div>
    </div>
  );
};

export default ServiceInfo;
