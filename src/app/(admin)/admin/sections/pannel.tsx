"use client"

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

const Pannel = () => {

  const [open, setOpen] = useState(false);


  return (
    <div>
        <Button onClick={()=>{setOpen(!open)}}>Butt</Button>

        <Drawer open={open} onOpenChange={setOpen}>
        {/* <DrawerTrigger>Open</DrawerTrigger> */}
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
                <Button variant="outline">Cancel</Button>
            </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
    </div>
  )
}

export default Pannel