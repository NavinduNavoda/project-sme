"use client"

import React from 'react'
import { useState } from 'react'
import {Input} from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import {toast, Toaster} from "react-hot-toast"

let c;

const LogSection = (props: any) => {

  const [adminPassword, setAdminPassword] = useState("");

  const getAdminToken = async () => {
    console.log("getting admin token");
    
    const stoast = toast.loading("Loging in as Admin");

    try{
      console.log("sending token req");
      const res = await axios.post("/api/users/adminlog", {adminPassword});
      if(res.data.adminToken == ""){
        toast.error('Login unsuccessfull', { id: stoast });
      }else{
        toast.success('Logged in Successfully', { id: stoast });
      }
      props.setAdminToken(res.data.adminToken);
    }catch(err){
      toast.error('Error occurred', { id: stoast });
      console.log(err);
    }
  }

  return (
    <div className='flex justify-center mt-[30vh]'>
       
        <Card className='text-center w-[400px] rounded-[2px]'>
          <CardHeader>
            <CardTitle>Log as Admin</CardTitle>
            <CardDescription className=' mx-[40px]'>Enter your admin password to view admin pannel.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex gap-x-[10px]'>
              <Input onKeyDown={(e)=>{
                if(e.key=="Enter") getAdminToken();
              }} type='password' value={adminPassword} onChange={(e)=>{setAdminPassword(e.target.value)}} placeholder='Admin Password ...'/>
              <Button onClick={getAdminToken}>Log</Button>
            </div>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
    </div>

  )
}

export default LogSection