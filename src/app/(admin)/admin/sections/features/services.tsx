import React, { useState } from 'react'
import ServiceCard from './components/serviceCard'
import AddCard from './components/addCard'
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
import { Button } from '@/components/ui/button'

const Services = () => {

    const [addCardDrawer, setAddCardDrawer] = useState(false);

    return (
        <div className=' p-[50px] pt-[50px]'>
            <h1 className='text-[32px] font-semibold'>Services</h1>
            <p className='opacity-[.8] mb-[40px]'>Add, edit and view services.</p>
            <AddCard trigger={setAddCardDrawer}/>

            <Drawer onOpenChange={setAddCardDrawer} open={addCardDrawer}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>New service.</DrawerTitle>
                        <DrawerDescription>Adding new service.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button className='w-[100px]'>Save</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


        </div>
    )
}

export default Services