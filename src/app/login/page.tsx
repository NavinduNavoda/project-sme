"use client"

import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

const Sign = () => {

  const logIn = async () => {
    console.log("logingin")

    try{

      const res = await axios.post("/api/users/login", user);
      console.log(res);

    }catch(err: any){
      console.log(err.message);
    }

  }

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  return (

    <div className=" text-center">

      <h1 className=" text-accentsme text-[24px] mt-[50px]">Log In</h1>
      <div className="">

        <input className="text-[16px] border-gray-500 border-[2px] p-[10px] w-[300px] mt-[20px]" type="text" placeholder="Email" id="email" value={user.email} onChange={e => { setUser({...user, email: e.target.value}) }} />  <br />
        <input className="text-[16px] border-gray-500 border-[2px] p-[10px] w-[300px] mt-[20px]" type="password" placeholder="password" id="pass" value={user.password} onChange={e => { setUser({...user, password: e.target.value}) }} /> <br />
        <button className="mt-[30px] bg-accentsme py-[10px] px-[20px] text-white rounded-[2px]" onClick={logIn}>LogIn</button>
      </div>


    </div>

  )
};

export default Sign;
