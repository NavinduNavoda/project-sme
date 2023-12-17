import React from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logo from "./smeLogo.svg";

// components

import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="w-full px-4 sm:px-4 md:px-24 lg:px-40 h-20 lg:h-28 text-paragrapgh lg:text-paragrapgh bg-white lg:bg-transparent">
      <div className="max-w-screen-2xl h-full mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            height={50}
            alt="Picture of the author"
            className=""
          />
        </Link>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <Link
            // href="src\app\services"
            href="../services"
            className="hover:text-accentsme duration-300"
          >
            Services
          </Link>
          <Link href="../about" className="hover:text-accentsme duration-300">
            About us
          </Link>
          <Link href="../contact" className="hover:text-accentsme duration-300">
            Contact us
          </Link>
        </ul>
        <div className="hidden lg:inline-flex gap-8 items-center">
          <Link href="../login">
            <button className=" h-14 bg-white text-paragrapgh uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-accentsme duration-300">
              Login
            </button>
          </Link>
          <Link href="../signup">
            <Button className="bg-accentsme hover:bg-accentsmehover">
              SIGNUP
            </Button>
          </Link>
        </div>
        <div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
