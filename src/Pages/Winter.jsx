import React from "react";
import Winter from "../data/Winter";
import { useNavigate } from "react-router-dom";

function Winter() {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="container grid grid-cols-5 gap-3">
      {Winter.map((item) => (
        <div
          onClick={() => handleNavigation(item.id)}
          key={item.id}
          className="container hover:text-red-300"
        >
          <div className="">
            <div className="flex w-full h-40 overflow-hidden items-center justify-center ">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto transition-transform duration-300 hover:scale-107"
              />
            </div>
            <h2 className="text-md font-bold mb-4">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Winter;
