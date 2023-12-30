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
import { useBooks } from '@/app/dataHolders/store'

const Book = (props: any) => {

    const [addCardDrawer, setAddCardDrawer] = useState(false);
    const [drawerGoal, setDrawerGoal] = useState("new");
    const [usingBookId, setUsingBookId] = useState("");
    const {books, setBooks} = useBooks();

    useEffect(()=>{
        refreshBooks();
    }, []);

    interface bookInterface {
        title: string,
        description: string,
        yt: string,
        price: string,
        top: boolean,
        content: string,
        thumbnail: File | undefined,
        pic: File | undefined,
        file: File | undefined,
    }

    const [bookDetails, setBookDetails] = useState<bookInterface>({
        title: "",
        description: "",
        yt: "",
        price: "",
        top: false,
        content: "",
        thumbnail: undefined,
        pic: undefined,
        file: undefined,
    });

    const refreshBooks = async () => {
        try{
            const res = await axios.get("/api/books");
            console.log(res);
            setBooks(res.data);
        }catch(e){
            console.log(e);
        }
    }

    const addNewBook = async () => {
        const stoast = toast.loading("Uploading Data");
        
        try{
            const data = new FormData();
            if(bookDetails.thumbnail) data.set("thumbnail", bookDetails.thumbnail);
            if(bookDetails.pic) data.set("pic", bookDetails.pic);
            if(bookDetails.file) data.set("file", bookDetails.file);
            data.set("title", bookDetails.title);
            data.set("description", bookDetails.description);
            data.set("yt", bookDetails.yt);
            data.set("price", bookDetails.price);
            data.set("top", String(bookDetails.top));
            data.set("content", bookDetails.content);
            data.set("adminToken", props.adminToken);
            
            const res = await fetch("/api/books", {
                method: "POST",
                body: data
            });
    
            if(!res.ok) throw "Book not added."

            if((await res.json()).success){
                toast.success('New book added', { id: stoast });
            }else{
                toast.error('Adding new book unsuccessfull', { id: stoast });
            }

        }catch(e){
            console.log(e);
            toast.error('Adding new book unsuccessfull', { id: stoast });
        }

        refreshBooks();
        setAddCardDrawer(!addCardDrawer);


    }

    const updateBook = async () => {

        const stoast = toast.loading("Uploading Data");
        
        try{
            const data = new FormData();
            if(bookDetails.thumbnail) data.set("thumbnail", bookDetails.thumbnail);
            if(bookDetails.pic) data.set("pic", bookDetails.pic);
            if(bookDetails.file) data.set("file", bookDetails.file);
            data.set("title", bookDetails.title);
            data.set("description", bookDetails.description);
            data.set("yt", bookDetails.yt);
            data.set("price", bookDetails.price);
            data.set("top", String(bookDetails.top));
            data.set("content", bookDetails.content);
            data.set("adminToken", props.adminToken);
            data.set("_id", usingBookId);
            
            const res = await fetch("/api/books", {
                method: "PUT",
                body: data
            });
    
            if(!res.ok) throw "Book not updated."

            if((await res.json()).success){
                toast.success('New book added', { id: stoast });
            }else{
                toast.error('Updating book unsuccessfull', { id: stoast });
            }

        }catch(e){
            console.log(e);
            toast.error('Updating book unsuccessfull', { id: stoast });
        }

        refreshBooks();
        setAddCardDrawer(!addCardDrawer);
    }

    const deleteBook = async () => {

        const stoast = toast.loading("Deleting book");
        
        try{
            const data = new FormData();

            data.set("adminToken", props.adminToken);
            data.set("_id", usingBookId);
            
            const res = await fetch("/api/books", {
                method: "DELETE",
                body: data
            });
    
            if(!res.ok) throw "Book not deleted."

            if((await res.json()).success){
                toast.success('Book Deleted', { id: stoast });
            }else{
                toast.error('Deleting book unsuccessfull', { id: stoast });
            }

        }catch(e){
            console.log(e);
            toast.error('Deleting book unsuccessfull', { id: stoast });
        }

        refreshBooks();
        setAddCardDrawer(!addCardDrawer);
    }

    const viewService = (index: number) => {
        if(index == -1) {
            setDrawerGoal("new");
            setUsingBookId("");
            setBookDetails({
                title : "",
                description : "",
                yt : "",
                price : "",
                top : false,
                content : "",
                pic : undefined,
                thumbnail: undefined,
                file: undefined
            }); 
        }else{
            setDrawerGoal("update");
            setUsingBookId(books[index]._id);
            setBookDetails(
                {
                    title : books[index].title!,
                    description : books[index].description,
                    yt : books[index].yt,
                    price : books[index].price,
                    top : books[index].top,
                    content : books[index].content,
                    pic : undefined,
                    thumbnail: undefined,
                    file: undefined
                }
            );
        }

        setAddCardDrawer(!addCardDrawer);
    }

    return (
        <div className=' p-[50px] pt-[50px]'>
            <div className='absolute top-[90px] right-[100px] z-[1]'>
                <RefreshButton onClick = {refreshBooks} />
            </div>
            <h1 className='text-[32px] font-semibold'>Books</h1>
            <p className='opacity-[.8] mb-[40px]'>Add, edit and view Books.</p>
            
            <div className='flex flex-wrap gap-[40px]'>
                <AddCard trigger={()=>{viewService(-1)}}/>
                {
                    books.map((e, i)=>{
                        return (
                            <div onClick={()=>{viewService(i)}}>
                                <ServiceCard data = {e} type = "book"/>
                            </div>
                        );
                    })
                }

            </div>
            





            <Drawer onOpenChange={setAddCardDrawer} open={addCardDrawer}>
                <DrawerContent className=' px-[40px] text-center flex justify-center'>
                    <DrawerHeader className=' text-center mt-[20px]'>
                        <DrawerTitle className=' text-center capitalize'>{drawerGoal} book</DrawerTitle>
                        <DrawerDescription className=' text-center'>{drawerGoal=="update"? "Updating": "Adding new"} book.</DrawerDescription>
                    </DrawerHeader>
                    <div className='flex justify-center mt-[20px] mb-[20px]'>
                        <div className='w-[400px] text-left'>
                            <Input onChange={(e)=>{setBookDetails({...bookDetails, title: e.target.value})}} value={bookDetails.title} className='mt-[10px]' placeholder='Title...'/>
                            <Input onChange={(e)=>{setBookDetails({...bookDetails, description: e.target.value})}} value={bookDetails.description} className='mt-[10px]' placeholder='Description...'/>
                            <Input onChange={(e)=>{setBookDetails({...bookDetails, yt: e.target.value})}} value={bookDetails.yt} className='mt-[10px]' placeholder='Youtube video url ...'/>
                            <Input onChange={(e)=>{setBookDetails({...bookDetails, price: e.target.value})}} value={bookDetails.price} className='mt-[10px]' placeholder='Price...'/>
                            <div className='flex items-center mt-[10px]'>
                                <Checkbox onCheckedChange={(e)=>{setBookDetails({...bookDetails, top: (Boolean)(e)})}} checked = {bookDetails.top} id="top"/>
                                <label htmlFor="top" className=' opacity-[.8] ml-[10px]'>Mark as top book.</label>
                            </div>
                            <Textarea onChange={(e)=>{setBookDetails({...bookDetails, content: e.target.value})}} value={bookDetails.content} className='mt-[20px]' placeholder='Content...'/>
                        </div>
                        <div className='text-left mt-[5px] ml-[50px]'>
                            <p className=' opacity-[.8] mb-[5px]'>Choose Thumbnail.</p>
                            <Input onChange={(e)=>{setBookDetails({...bookDetails, thumbnail: e.target.files?.[0]})}} type='file' placeholder='Thumbnail...'/>
                            <p className=' opacity-[.8] mt-[20px] mb-[5px]'>Choose Content picture.</p>
                            <Input onChange={(e)=>{setBookDetails({...bookDetails, pic: e.target.files?.[0]})}} type='file' placeholder='Content picture...'/>
                            <p className=' opacity-[.8] mt-[20px] mb-[5px]'>Choose book file.</p>
                            <Input onChange={(e)=>{setBookDetails({...bookDetails, file: e.target.files?.[0]})}} type='file' placeholder='Book file...'/>
                                                      
                        </div>

                    </div>

                    <DrawerFooter className='w-[100%] flex justify-center'>
                        <div className='flex justify-center gap-x-[20px]'>
                            <div>
                                <Button onClick={(drawerGoal == "new")? addNewBook: updateBook} className='w-[100px]'>Save</Button>
                            </div>
                            {(drawerGoal == "update") && (<div>
                                <Button variant="secondary" onClick={deleteBook} className='w-[100px]'>Delete</Button>
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

export default Book