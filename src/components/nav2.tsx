"use client";
import NavLink from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "./smeLogo.svg";
import logoonly from "../../public/logoonly.svg";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { useUserLog } from "@/app/dataHolders/store";
import axios from "axios";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const {setUserLog, setIsFetching, isLogedIn, fname, lname, isVerified, isFetching} = useUserLog();

  let isChecked = false;

  const closeNav = () => {
    setNav(false);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [logData, setLogData] = useState({});

  useEffect(() => {
    if (!isChecked) {
      isChecked = true;
      setIsFetching(true);
      (async () => {
        try {
          const res = await axios.post("/api/users/check");
          console.log(res);
          setUserLog(res.data.loggedIn, res.data.data.fname, res.data.data.lname,res.data.data.isVerified);
        } catch (error) {
          console.error("Error checking user login:", error);
        } finally{
          setIsFetching(false);
        }
      })();

    }
  }, []);

  // resend button

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes in seconds

  const handleClick = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setTimer(180);
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isButtonDisabled) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isButtonDisabled]);

  useEffect(() => {
    if (timer === 0) {
      setIsButtonDisabled(false);
    }
  }, [timer]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
    return formattedTime;
  };

  return (
    <div>
      <div className="w-full px-4 sm:px-4 md:px-24 lg:px-40 h-20 lg:h-28 text-paragrapgh lg:text-paragrapgh bg-white lg:bg-transparent max-w-screen-2xl mx-auto flex items-center justify-between z-40">
        <div>
          <NavLink href="/">
            <Image
              src={logo}
              height={50}
              alt="Picture of the author"
              className=""
            />
          </NavLink>
        </div>

<<<<<<< HEAD
=======
        <div>{JSON.stringify(logData)}</div>

>>>>>>> 6b294d0e86499d20769dee02e1fc0abffead27a4
        <ul className="hidden uppercase text-sm font-semibold gap-8 md:flex">
          <NavLink
            href="../services"
            onClick={closeNav}
            className="hover:text-accentsme duration-300 hover:scale-110"
          >
            Services
          </NavLink>
          <NavLink
            href="../about"
            onClick={closeNav}
            className="hover:text-accentsme duration-300 hover:scale-110"
          >
            About us
          </NavLink>
          <NavLink
            href="../contact"
            onClick={closeNav}
            className="hover:text-accentsme duration-300 hover:scale-110"
          >
            Contact us
          </NavLink>
        </ul>
        {isFetching && (<div>Loading...</div>)}
        {!isFetching && isLogedIn && (
          <div className="">
            <div>{fname} {lname}</div>
            {!isVerified && (
              <div>
                <div>
                  Please check your email inbox and verify.
                </div>
                <div>
                  resend email.
                </div>
              </div>
            )}
            {isVerified && (
              <div>
                <NavLink
                  href="../dashboard"
                  className="hover:text-accentsme duration-300 hover:scale-110"
                >
                  Dashboard
                </NavLink>
              </div>
            )}
          </div>
        )}
        {!isFetching && !isLogedIn && (
          <div className="hidden lg:inline-flex gap-8 items-center">
            <NavLink href="../login">
              <button className="h-14 bg-white text-paragrapgh uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-accentsme duration-300 hover:scale-110 ">
                Login
              </button>
            </NavLink>
            <NavLink href="../signup">
              <Button className="bg-accentsme rounded-[2px] hover:bg-accentsmehover hover:scale-110 duration-300">
                SIGNUP
              </Button>
            </NavLink>
          </div>
        )}

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
            <NavLink
              href="../"
              onClick={closeNav}
              className="text-accentsme font-bold"
            >
              HOME
            </NavLink>
            <NavLink
              href="../services"
              onClick={closeNav}
              className="text-accentsme font-bold"
            >
              SERVICES
            </NavLink>
            <NavLink
              href="../about"
              onClick={closeNav}
              className="text-accentsme font-bold"
            >
              ABOUT US
            </NavLink>
            <NavLink
              href="../contact"
              onClick={closeNav}
              className="text-accentsme font-bold"
            >
              CONTACT US
            </NavLink>
          </ul>
        )}
      </div>
      {/* <div className="text-right w-full px-4 sm:px-4 md:px-24 lg:px-40  text-paragrapgh lg:text-paragrapgh">
        {isLoggedIn ? (
          <h1 className="py-4">Hello User</h1>
        ) : (
          <div className="">
            <h1>Please verify your account</h1>
            <button
              onClick={handleClick}
              disabled={isButtonDisabled}
              className={`underline hover:text-black ${
                isButtonDisabled ? "disabled hover:none" : ""
              }`}
            >
              Resend OTP
            </button>

            {isButtonDisabled && <p>{formatTime(timer)} </p>}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
