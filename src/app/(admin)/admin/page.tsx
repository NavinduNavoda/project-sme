"use client"

import React, { useState, useEffect } from 'react'
import LogSection from './sections/logSection'
import Pannel from './sections/pannel'
import { useUserLog } from "@/app/dataHolders/store";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {toast, Toaster} from "react-hot-toast"


const Page = () => {

  const [adminToken, setAdminToken] = useState("");
  const {
    setUserLog,
    setIsFetching,
    isLogedIn,
    fname,
    lname,
    isVerified,
    isFetching,
  } = useUserLog();
  const {push, refresh} = useRouter();

  let checkOnload = false;

  useEffect(()=>{
    if(!checkOnload){
      checkOnload = true;
      setIsFetching(true);
      (async () => {
        try {
          console.log("login fetch from admin");
          const res = await axios.post("/api/users/check");
          console.log(res);
          setUserLog(
            res.data.loggedIn,
            res.data.data.fname,
            res.data.data.lname,
            res.data.data.isVerified
          );
          if(!res.data.loggedIn) push("/login");
        } catch (error) {
          console.error("Error checking user login:", error);
          push("/login");
        } finally {
          setIsFetching(false);
        }
      })();
      
    }

  }, []);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {isFetching && (<div> Loading... </div>)}
      {!isFetching && isLogedIn && (adminToken == "") && (<LogSection setAdminToken = {setAdminToken}/>)}
      {!isFetching && isLogedIn && (adminToken != "") && (<Pannel adminToken = {adminToken}/>)}
    </div>
  )
}

export default Page