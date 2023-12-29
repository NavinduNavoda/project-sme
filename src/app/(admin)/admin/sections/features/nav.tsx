import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Badge } from '@/components/ui/badge'


import { BsFileEarmarkPlus } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { PiChartLineUpLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { useUserLog } from '@/app/dataHolders/store';
import { RiAdminLine } from "react-icons/ri";



const Nav = (props: any) => {

    const {fname} = useUserLog();

    return (
        <div className='flex p-[15px] pt-[50px] w-[250px] h-[100vh] shadow-md'>
            <ul className='flex flex-col gap-y-[10px] w-[100%]'>

                <li className='mb-[24px]'>
                    <Popover>
                        <PopoverTrigger className='flex items-center gap-x-[15px] w-[100%]'>
                            <Button variant="outline" className='w-[100%] flex justify-start'>
                                <RiAdminLine className = " w-[20px] h-[20px] mr-[15px]" />
                                <div>{fname.substring(0, 10)}/Admin</div>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className=' w-[200px]'>
                            <Button variant="ghost">Logout</Button>
                        </PopoverContent>
                    </Popover>
                    
                </li>

                <li>
                    <Button onClick={()=>{props.setActive("app")}} variant={props.active == "app"? "black" : "ghost"} className='w-[100%] flex justify-start'>
                        <BsFileEarmarkPlus className="w-[19px] h-[19px] mr-[15px]"/><div>Appointments</div>
                    </Button>
                </li>
                <li>
                    <Button onClick={()=>{props.setActive("ser")}} variant={props.active == "ser"? "black" : "ghost"} className='w-[100%] flex justify-start'>
                        <IoBagHandleOutline  className="w-[20px] h-[20px] mr-[15px]"/><div>Services</div>
                    </Button>
                </li>
                <li>
                    <Button onClick={()=>{props.setActive("boo")}} variant={props.active == "boo"? "black" : "ghost"} className='w-[100%] flex justify-start'>
                        <IoBookOutline   className="w-[20px] h-[20px] mr-[15px]"/><div>Books</div>
                    </Button>
                </li>
                <li>
                    <Button onClick={()=>{props.setActive("cli")}} variant={props.active == "cli"? "black" : "ghost"} className='w-[100%] flex justify-start'>
                        <FiUser className="w-[20px] h-[20px] mr-[15px]"/><div>Clients</div>
                    </Button>
                </li>
                <li>
                    <Button onClick={()=>{props.setActive("das")}} variant={props.active == "das"? "black" : "ghost"} className='w-[100%] flex justify-start'>
                        <PiChartLineUpLight className="w-[20px] h-[20px] mr-[15px]"/><div>Dashboard</div>
                    </Button>
                </li>
                <li>
                    <Button onClick={()=>{props.setActive("set")}} variant={props.active == "set"? "black" : "ghost"} className='w-[100%] flex justify-start'>
                        <IoSettingsOutline className="w-[20px] h-[20px] mr-[15px]"/><div>Settings</div>
                    </Button>
                </li>
            
            </ul>
        </div>
    )
}

export default Nav