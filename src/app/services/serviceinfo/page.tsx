import React from "react";
import clothing from "../../../../public/clothing.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EbooksCardList from "@/components/EbooksCardList";

const ServiceInfo = () => {
  return (
    <div>
      <div className="px-4 sm:px-4 md:px-24 lg:px-40">
        <h1 className="font-bold text-[28px] pt-8 font-montserrat text-paragrapgh mb-12">
          BOOK AN APPOINTMENT FOR,
        </h1>
        <div className="relative mb-24">
          <Image
            src={clothing}
            width={1920}
            className="w-full h-auto"
            alt="clothing"
          ></Image>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="font-bold text-[60px] font-montserrat text-paragrapgh mb-12 w-[900px]">
              Unveiling Your Business's Radiant Potential: Cosmetic Consultancy
              for Success!
            </h1>
            <Button className="bg-accentsme hover:bg-accentsmehover hover:scale-110 transition duration-700">
              Build now
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/5">
            <p className="text-[20px] text-paralight tracking-wide">
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

          <div className="w-full md:w-2/5 mx-auto pl-12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pZ4mSs6KoE4?si=BIV64ReXC5KW6e2w"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <p className="text-[20px] text-paralight tracking-wide py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          voluptates doloremque autem, iusto temporibus nam incidunt omnis eaque
          fugit laborum molestias facilis, expedita eum odio deserunt iste cum!
          Aliquid, consectetur! Pariatur nulla explicabo itaque velit aut
          necessitatibus officiis perferendis labore, omnis inventore! Suscipit
          quisquam porro ratione in iusto ipsam consectetur modi aperiam quo
          ipsum fugit delectus quod nisi, quae officiis? Expedita sit optio
          autem dolorum voluptatibus possimus sed, cumque fuga eos, iste dolores
          nesciunt, maiores ullam amet repudiandae ad nulla explicabo doloremque
          ducimus repellendus. Perspiciatis dolorem unde quisquam hic inventore.
          Corrupti,
        </p>
        <h1 className="font-bold text-[28px] pt-8 font-montserrat uppercase text-paragrapgh mb-12">
          Explore our recommended ebooks
        </h1>
        <EbooksCardList></EbooksCardList>
      </div>
    </div>
  );
};

export default ServiceInfo;
