"use client";

import React from "react";
import axios from "axios";
import { useState } from "react";
import logo from "../../../public/logoonly.svg";
import Image from "next/image";
import { json } from "stream/consumers";
import { setToken, getToken } from "../dataHolders/clientData";

const Sign = () => {
  const signUp = async () => {
    console.log("signingUp");
    setIsLoading(true);

    try {
      const res = await axios.post("/api/users/signup", user);
      console.log(res);
      setStatus({message: res.data.message, success: res.data.success, email: res.data.email, password: res.data.password, fname: res.data.fname, lname: res.data.lnmae});
      setToken(res.data.token);
    } catch (err: any) {
      console.log(err);
    } finally{
      setIsLoading(false);
    }
  };

  const resend = async() => {
    setIsLoading(true);
    setStatus({message: "", success: false,  email: "", password: "", fname: "", lname: "",});
    try{
      console.log("token: " + getToken());
      const res = await axios.post("/api/users/resendverify", {token: getToken()});
      setStatus(res.data);
      setToken(res.data.token);
    }catch(err){
      console.log(err);
    }finally{
      setIsLoading(false);
    }
  }

  const [isLoading, setIsLoading] = useState(false);

  const [status, setStatus] = useState({
    message: "",
    success: false,
    email: "",
    password: "",
    fname: "",
    lname: "",
  });

  const [user, setUser] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
  });

  return (
    <div className="text-center">
      <div>
        <section className="flex items-center  justify-center mb-10">
          {/* signup container */}
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
                create an account!
              </h2>
              <p className="text-xs mt-2 mb-8 text-paragrapgh">
                Please enter your login credentials
              </p>

              <div className="flex flex-col gap-4">
                <input
                  className="p-2 border w-full"
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  value={user.fname}
                  onChange={(e) => {
                    setUser({ ...user, fname: e.target.value });
                  }}
                />{" "}
                <input
                  className="p-2 border w-full"
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  value={user.lname}
                  onChange={(e) => {
                    setUser({ ...user, lname: e.target.value });
                  }}
                />{" "}
                <input
                  className="p-2 border w-full"
                  type="text"
                  placeholder="Email"
                  id="email"
                  value={user.email}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
                <input
                  className="p-2 border w-full"
                  type="password"
                  placeholder="password"
                  id="pass"
                  value={user.password}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />

                <div className={`${status.success? "text-green-500" : "text-red-500"} text-[16px]`}>
                  <p>{status.email}</p>
                  <p>{status.password}</p>
                  <p>{status.fname}</p>
                  <p>{status.lname}</p>
                  <p>{status.message}</p>
                  {status.success && (
                    <button className="bg-paragrapgh text-white rounded-[2px] p-[10px]" onClick={resend}>Resend</button>
                  )}
                </div>

                {isLoading && (<div className="text-[16px] text-accentsme">
                  Loading ...
                </div>)}

                <button
                  className="bg-accentsme text-white py-2 hover:scale-105 duration-300 hover:bg-accentsmehover rounded-[2px]"
                  onClick={signUp}
                >
                  Sign up
                </button>
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
