// Card.tsx
import React from "react";

interface CardProps {
  cardKey: React.Key;
  title: string;
  description: string;
}

const Card1: React.FC<CardProps> = ({ cardKey, title, description }) => {
  return (
    <div key={cardKey} className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default Card1;
