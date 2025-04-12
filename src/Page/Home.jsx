import React from "react";
import bg from "../assets/home-img.png";
import { useTranslation } from "react-i18next";
import Service from "../Pages/Service";
import QualityStart from "../Pages/QualityStart";
import Winter from "../Pages/Winter";
import QualityCenter from "../Pages/QualityCenter";
import QualityBottom from "../Pages/QualityBottom";
import Autumn from "../Pages/Autumn";
import Summer from "../Pages/Summer";

function Home() {
  const { t } = useTranslation();

 
 
  return (
    <div className="">
      <div className="container ">
        <div
          className="animated-bg w-full h-90 md:h-130 lg:h-140
          rounded-3xl md:rounded-4xl lg:rounded-[50px] relative"
        >
          <img
            src={bg}
            alt="home"
            className="w-87  h-87 min-[540px]:w-94 min-[500px]:h-94  mx-auto object-cover md:hidden"
          />
          <img
            src={bg}
            alt="home"
            className="absolute -top-15 -left-35 min-[540px]:w-[80wh] min-[500px]:h-[80wh] object-cover hidden md:block"
          />
          <div className="absolute right-5 top-15 text-right flex flex-col gap-3 md:gap-7 lg:gap-8">
            <h1 className="text-[#7A5C33] text-xl lg:text-2xl font-bold">
              {t("home.top")}
            </h1>
            <h2 className="text-[#A17F4A] text-3xl font-medium lg:text-5xl">
              {t("home.title")}
            </h2>
            <h3 className="text-[#A07E49] text-4xl md:text-6xl font-medium lg:pt-3 lg:text-[80px]">
              {t("home.description")}
            </h3>
          </div>
        </div>
      </div>
      <Service />
      <QualityStart />
      <Winter />
      <QualityCenter />
      <Autumn/>
      <QualityBottom />
      <Summer />
    </div>
  );
}

export default Home;
