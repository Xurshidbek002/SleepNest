import React from "react";
import winter from "../data/Winter";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Winter() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="py-2 md:py-10">
      <div className="container">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-5">{t("winter.titlesup")}</h1>
        <p className="text-[12px] md:text-sm text-center pb-10">{t("quality.title")}</p>
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
          {winter.map((item) => (
            <div
              onClick={() => handleNavigation(item.id)}
              key={item.id}
              className="hover:text-red-500 cursor-pointer"
            >
              <div className="">
                <div className="flex w-full h-40 rounded-xl overflow-hidden items-center justify-center ">
                  <img
                    src={item.img}
                    alt={t(item.title)}
                    className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-107"
                  />
                </div>
                <h2 className="text-md  md:pt-1">{t(item.title)}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Winter;
