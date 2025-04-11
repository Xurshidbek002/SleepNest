import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import img from "../assets/q-3.png";

function QualityBottom() {
  const { t } = useTranslation();
  return (
    <>
      <div className="pt-30 md:pt-35 lg:pt-7 pb-15">
        <div className="container">
          <div className="bg-[#236E47] hover:shadow-[2px_3px_20px_#000000] h-130 sm:h-135 md:h-115 lg:h-87 text-white rounded-3xl flex px-15 md:px-9 items-end p-5 pb-15 relative">
            <img
              src={img}
              alt=""
              className="w-60 md:w-76 lg:w-85 absolute -top-1/5 md:-top-1/3 lg:-top-5  left-1/2 transform -translate-x-1/2"
            />
            <div className="flex z-2 flex-col md:flex-row items-center w-full md:justify-between">
              <div className="text-center md:text-left max-w-100">
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold pb-3">100%</h2>
                <p className="text-sm sm:text-[18px] pb-4">
                  {t("quality.desc")}
                </p>
              </div>
              <div className="text-center  md:text-left max-w-100">
                <h2 className="text-[18px] sm:text-[30px] font-bold">
                  "{t("quality.title")}"
                </h2>
                <p className="text-sm sm:text-[16px] pt-4 pb-3">{t("quality.text")}</p>
                <NavLink
                  to="/collection"
                  className="bg-white text-black py-2 px-3  rounded-xl text-[13px]"
                >
                  {t("quality.btn")}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QualityBottom;
