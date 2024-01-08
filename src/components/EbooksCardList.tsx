"use client";
import React, { useEffect, useState } from "react";
import EbooksCard from "./EbooksCard";
import axios from "axios";

import { useBooks } from "@/app/dataHolders/store";

const Book = (props: any) => {
  const [usingBookId, setUsingBookId] = useState("");
  const { books, setBooks } = useBooks();

  useEffect(() => {
    refreshBooks();
  }, []);

  interface bookInterface {
    title: string;
    description: string;
    yt: string;
    price: string;
    top: boolean;
    content: string;
    thumbnail: File | undefined;
    pic: File | undefined;
    file: File | undefined;
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
    try {
      const res = await axios.get("/api/books");
      console.log(res);
      setBooks(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-24 justify-between">
      {books.map((e, i) => {
        return <EbooksCard data={e} key={i} type="book" />;
      })}
    </div>
  );
};

export default Book;
