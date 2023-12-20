"use client"

import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

const Sign = () => {

  const signUp = async () => {
    console.log("signingUp")

    try{

      const res = await axios.post("/api/users/signup", user);
      console.log(res);

    }catch(err: any){
      console.log(err.message);
    }

  }

  const [user, setUser] = useState({
    email: "",
    fname: "",
    lname: "",
    password: ""
  });

  return (

    <div className=" text-center">

      <h1 className=" text-accentsme text-[24px] mt-[50px]">Sign Up</h1>
      <div className="">

        <input className="text-[16px] border-gray-500 border-[2px] p-[10px] w-[300px] mt-[50px]" type="text" placeholder="First Name" id="fname" value={user.fname} onChange={e => { setUser({...user, fname: e.target.value}) }} /> <br />
        <input className="text-[16px] border-gray-500 border-[2px] p-[10px] w-[300px] mt-[20px]" type="text" placeholder="Last Name" id="lname" value={user.lname} onChange={e => { setUser({...user, lname: e.target.value}) }} /> <br />
        <input className="text-[16px] border-gray-500 border-[2px] p-[10px] w-[300px] mt-[20px]" type="text" placeholder="Email" id="email" value={user.email} onChange={e => { setUser({...user, email: e.target.value}) }} />  <br />
        <input className="text-[16px] border-gray-500 border-[2px] p-[10px] w-[300px] mt-[20px]" type="password" placeholder="password" id="pass" value={user.password} onChange={e => { setUser({...user, password: e.target.value}) }} /> <br />
        <button className="mt-[30px] bg-accentsme py-[10px] px-[20px] text-white rounded-[2px]" onClick={signUp}>SignUp</button>
      </div>


    </div>

  )
};

export default Sign;
