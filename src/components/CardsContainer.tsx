"use client";

import React, { useEffect, useState } from "react";
import Card1 from "./Card1";
import axios from "axios";

const CardsContainer: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API route
    axios
      .get("/api/getData")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item: any) => (
        <Card1
          cardKey={item._id} // or another unique identifier
          title={item.title}
          description={item.description}
          // Add more props as needed
        />
      ))}
    </div>
  );
};

export default CardsContainer;
