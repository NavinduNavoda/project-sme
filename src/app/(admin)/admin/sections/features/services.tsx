import React, { useEffect, useState } from 'react'
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

import { Checkbox } from '@/components/ui/checkbox'

import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {toast} from "react-hot-toast"
import axios from 'axios'
import RefreshButton from './components/refreshButton'
import { useServices } from '@/app/dataHolders/store'

const Services = (props: any) => {

    const [addCardDrawer, setAddCardDrawer] = useState(false);
    const [drawerGoal, setDrawerGoal] = useState("new");
    const [usingServiceId, setUsingServiceId] = useState("");
    const {services, setServices} = useServices();

    useEffect(()=>{
        refreshServices();
    }, []);

    interface serviceInterface {
        title: string,
        description: string,
        yt: string,
        price: string,
        top: boolean,
        content: string,
        thumbnail: File | undefined,
        pic: File | undefined
    }

    const [serviceDetails, setServiceDetaills] = useState<serviceInterface>({
        title: "",
        description: "",
        yt: "",
        price: "",
        top: false,
        content: "",
        thumbnail: undefined,
        pic: undefined
    });

    const refreshServices = async () => {
        try{
            const res = await axios.get("/api/services");
            console.log(res);
            setServices(res.data);
        }catch(e){
            console.log(e);
        }
    }

    const addNewService = async () => {
        const stoast = toast.loading("Uploading Data");
        
        try{
            const data = new FormData();
            if(serviceDetails.thumbnail) data.set("thumbnail", serviceDetails.thumbnail);
            if(serviceDetails.pic) data.set("pic", serviceDetails.pic);
            data.set("title", serviceDetails.title);
            data.set("description", serviceDetails.description);
            data.set("yt", serviceDetails.yt);
            data.set("price", serviceDetails.price);
            data.set("top", String(serviceDetails.top));
            data.set("content", serviceDetails.content);
            data.set("adminToken", props.adminToken);
            
            const res = await fetch("/api/services", {
                method: "POST",
                body: data
            });
    
            if(!res.ok) throw "Service not added."

            if((await res.json()).success){
                toast.success('New service added', { id: stoast });
            }else{
                toast.error('Adding new service unsuccessfull', { id: stoast });
            }

        }catch(e){
            console.log(e);
            toast.error('Adding new service unsuccessfull', { id: stoast });
        }

        refreshServices();
        setAddCardDrawer(!addCardDrawer);


    }

    const updateService = async () => {

         const stoast = toast.loading("Uploading Data");
        
        try{
            const data = new FormData();
            if(serviceDetails.thumbnail) data.set("thumbnail", serviceDetails.thumbnail);
            if(serviceDetails.pic) data.set("pic", serviceDetails.pic);
            data.set("title", serviceDetails.title);
            data.set("description", serviceDetails.description);
            data.set("yt", serviceDetails.yt);
            data.set("price", serviceDetails.price);
            data.set("top", String(serviceDetails.top));
            data.set("content", serviceDetails.content);
            data.set("adminToken", props.adminToken);
            data.set("_id", usingServiceId);
            
            const res = await fetch("/api/services", {
                method: "PUT",
                body: data
            });
    
            if(!res.ok) throw "Service not updated."

            if((await res.json()).success){
                toast.success('New service added', { id: stoast });
            }else{
                toast.error('Updating service unsuccessfull', { id: stoast });
            }

        }catch(e){
            console.log(e);
            toast.error('Updating service unsuccessfull', { id: stoast });
        }

        refreshServices();
        setAddCardDrawer(!addCardDrawer);
    }

    const deleteService = async () => {

        const stoast = toast.loading("Deleting Service");
        
        try{
            const data = new FormData();

            data.set("adminToken", props.adminToken);
            data.set("_id", usingServiceId);
            
            const res = await fetch("/api/services", {
                method: "DELETE",
                body: data
            });
    
            if(!res.ok) throw "Service not deleted."

            if((await res.json()).success){
                toast.success('Service Deleted', { id: stoast });
            }else{
                toast.error('Deleting service unsuccessfull', { id: stoast });
            }

        }catch(e){
            console.log(e);
            toast.error('Deleting service unsuccessfull', { id: stoast });
        }

        refreshServices();
        setAddCardDrawer(!addCardDrawer);
    }

    const viewService = (index: number) => {
        if(index == -1) {
            setDrawerGoal("new");
            setUsingServiceId("");
            setServiceDetaills({
                title : "",
                description : "",
                yt : "",
                price : "",
                top : false,
                content : "",
                pic : undefined,
                thumbnail: undefined
            }); 
        }else{
            setDrawerGoal("update");
            setUsingServiceId(services[index]._id);
            setServiceDetaills(
                {
                    title : services[index].title!,
                    description : services[index].description,
                    yt : services[index].yt,
                    price : services[index].price,
                    top : services[index].top,
                    content : services[index].content,
                    pic : undefined,
                    thumbnail: undefined
                }
            );
        }

        setAddCardDrawer(!addCardDrawer);
    }

    return (
        <div className=' p-[50px] pt-[50px]'>
            <div className='absolute top-[90px] right-[100px] z-[1]'>
                <RefreshButton onClick = {refreshServices} />
            </div>
            <h1 className='text-[32px] font-semibold'>Services</h1>
            <p className='opacity-[.8] mb-[40px]'>Add, edit and view services.</p>
            
            <div className='flex flex-wrap gap-[40px]'>
                <AddCard trigger={()=>{viewService(-1)}}/>
                {
                    services.map((e, i)=>{
                        return (
                            <div  key={i} onClick={()=>{viewService(i)}}>
                                <ServiceCard data = {e} type = "service"/>
                            </div>
                        );
                    })
                }

            </div>
            





            <Drawer onOpenChange={setAddCardDrawer} open={addCardDrawer}>
                <DrawerContent className=' px-[40px] text-center flex justify-center'>
                    <DrawerHeader className=' text-center mt-[20px]'>
                        <DrawerTitle className=' text-center capitalize'>{drawerGoal} service</DrawerTitle>
                        <DrawerDescription className=' text-center'>{drawerGoal=="update"? "Updating": "Adding new"} service.</DrawerDescription>
                    </DrawerHeader>
                    <div className='flex justify-center mt-[20px] mb-[20px]'>
                        <div className='w-[400px] text-left'>
                            <Input onChange={(e)=>{setServiceDetaills({...serviceDetails, title: e.target.value})}} value={serviceDetails.title} className='mt-[10px]' placeholder='Title...'/>
                            <Input onChange={(e)=>{setServiceDetaills({...serviceDetails, description: e.target.value})}} value={serviceDetails.description} className='mt-[10px]' placeholder='Description...'/>
                            <Input onChange={(e)=>{setServiceDetaills({...serviceDetails, yt: e.target.value})}} value={serviceDetails.yt} className='mt-[10px]' placeholder='Youtube video url ...'/>
                            <Input onChange={(e)=>{setServiceDetaills({...serviceDetails, price: e.target.value})}} value={serviceDetails.price} className='mt-[10px]' placeholder='Price...'/>
                            <div className='flex items-center mt-[10px]'>
                                <Checkbox onCheckedChange={(e)=>{setServiceDetaills({...serviceDetails, top: (Boolean)(e)})}} checked = {serviceDetails.top} id="top"/>
                                <label htmlFor="top" className=' opacity-[.8] ml-[10px]'>Mark as top service.</label>
                            </div>
                            <Textarea onChange={(e)=>{setServiceDetaills({...serviceDetails, content: e.target.value})}} value={serviceDetails.content} className='mt-[20px]' placeholder='Content...'/>
                        </div>
                        <div className='text-left mt-[5px] ml-[50px]'>
                            <p className=' opacity-[.8] mb-[5px]'>Choose Thumbnail.</p>
                            <Input onChange={(e)=>{setServiceDetaills({...serviceDetails, thumbnail: e.target.files?.[0]})}} type='file' placeholder='Thumbnail...'/>
                            <p className=' opacity-[.8] mt-[20px] mb-[5px]'>Choose Content picture.</p>
                            <Input onChange={(e)=>{setServiceDetaills({...serviceDetails, pic: e.target.files?.[0]})}} type='file' placeholder='Content picture...'/>
                           
                        </div>

                    </div>

                    <DrawerFooter className='w-[100%] flex justify-center'>
                        <div className='flex justify-center gap-x-[20px]'>
                            <div>
                                <Button onClick={(drawerGoal == "new")? addNewService: updateService} className='w-[100px]'>Save</Button>
                            </div>
                            {(drawerGoal == "update") && (<div>
                                <Button variant="secondary" onClick={deleteService} className='w-[100px]'>Delete</Button>
                            </div>)}
                            <DrawerClose>
                                <Button variant="outline" className='w-[100px]' >Cancel</Button>
                            </DrawerClose>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Services