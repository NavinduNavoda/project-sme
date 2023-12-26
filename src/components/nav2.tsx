"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "./smeLogo.svg";
import logoonly from "../../public/logoonly.svg";
import { Button } from "./ui/button";
import { useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    
    (async () => {
      const res = await axios.post("/api/users/check");
      if(res.data.loggedIn){
        
      }
    })();

  }, []);

  return (
    <div className="w-full px-4 sm:px-4 md:px-24 lg:px-40 h-20 lg:h-28 text-paragrapgh lg:text-paragrapgh bg-white lg:bg-transparent max-w-screen-2xl mx-auto flex items-center justify-between z-40">
      <div>
        <Link href="/">
          <Image
            src={logo}
            height={50}
            alt="Picture of the author"
            className=""
          />
        </Link>
      </div>

      <ul className="hidden uppercase text-sm font-semibold gap-8 md:flex">
        <Link
          href="../services"
          onClick={closeNav}
          className="hover:text-accentsme duration-300 hover:scale-110"
        >
          Services
        </Link>
        <Link
          href="../about"
          onClick={closeNav}
          className="hover:text-accentsme duration-300 hover:scale-110"
        >
          About us
        </Link>
        <Link
          href="../contact"
          onClick={closeNav}
          className="hover:text-accentsme duration-300 hover:scale-110"
        >
          Contact us
        </Link>
      </ul>
      <div className="hidden lg:inline-flex gap-8 items-center">
        <Link href="../login">
          <button className="h-14 bg-white text-paragrapgh uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-accentsme duration-300 hover:scale-110 ">
            Login
          </button>
        </Link>
        <Link href="../signup">
          <Button className="bg-accentsme rounded-[2px] hover:bg-accentsmehover hover:scale-110 duration-300">
            SIGNUP
          </Button>
        </Link>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer  pr-4 z-50 text-gray-500 md:hidden"
      >
        {nav ? (
          <div className="fixed right-0 top-0 p-8">
            <FaTimes size={30} />
          </div>
        ) : (
          <FaBars size={30} />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center top-0 left-0 w-full h-screen bg-white text-gray-500 z-40 gap-10 fixed">
          <Image width={50} alt="logo" src={logoonly}></Image>
          <Link
            href="../"
            onClick={closeNav}
            className="text-accentsme font-bold"
          >
            HOME
          </Link>
          <Link
            href="../services"
            onClick={closeNav}
            className="text-accentsme font-bold"
          >
            SERVICES
          </Link>
          <Link
            href="../about"
            onClick={closeNav}
            className="text-accentsme font-bold"
          >
            ABOUT US
          </Link>
          <Link
            href="../contact"
            onClick={closeNav}
            className="text-accentsme font-bold"
          >
            CONTACT US
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
