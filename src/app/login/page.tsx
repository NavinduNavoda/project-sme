"use client";

import React from "react";
import axios from "axios";
import { useState } from "react";
import logo from "../../../public/logoonly.svg";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const Sign = () => {
  const logIn = async () => {
    console.log("logingin");

    try {
      const res = await axios.post("/api/users/login", user);
      console.log(res);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="text-center">
      <div>
        <section className=" flex items-center justify-center mb-10">
          {/* login container */}
          <div className="bg-lowwhite flex max-w-3xl items-center">
            {/* form */}
            <div className="md:w-1/2 px-8 md:px-16 py-5">
              <Image
                width={40}
                src={logo}
                alt="company logo"
                className="mx-auto mb-8"
              ></Image>
              <h2 className="font-bold text-2xl font-montserrat uppercase text-paragrapgh">
                Welcome back!
              </h2>
              <p className="text-xs mt-2 text-paragrapgh">
                Please enter your login credentials
              </p>

              <div className="flex flex-col gap-4">
                <input
                  className="p-2 mt-8 border"
                  type="text"
                  placeholder="Email"
                  id="email"
                  required
                  value={user.email}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />

                <div className="relative">
                  <input
                    className="p-2 border w-full"
                    type="password"
                    placeholder="Password"
                    id="pass"
                    required
                    value={user.password}
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                  />
                </div>
                <button
                  className=" bg-accentsme text-white py-2 hover:scale-105 duration-300 hover:bg-accentsmehover rounded-[2px]"
                  onClick={logIn}
                >
                  Log in
                </button>
              </div>

              <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                <a href="#">Forgot your password?</a>
              </div>

              <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Don't have an account?</p>
                <Link href="../signup">
                  <button className="py-2 px-5 bg-white border hover:scale-110 duration-300">
                    Register
                  </button>
                </Link>
              </div>
            </div>

            {/* image */}
            <div className="md:block hidden w-1/2">
              <img
                className=""
                src="../../../loginImg.png"
                alt="loginImage"
              ></img>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sign;
