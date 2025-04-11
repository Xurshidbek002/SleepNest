import React from "react";
import { useParams } from "react-router-dom";
import Winter from "../data/Winter";

function Details() {
  const { id } = useParams();

  const item = Winter.find((item) => item.id.toString() === id);

  return (
    <div className="container mx-auto mt-10">
      {item ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={item.img} alt={item.title} className="w-full h-auto" />
          <div>
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <p className="text-gray-700 mt-4">{item.description}</p>
          </div>
        </div>
      ) : (
        <p>Ma'lumot topilmadi</p>
      )}
    </div>
  );
}

export default Details;
