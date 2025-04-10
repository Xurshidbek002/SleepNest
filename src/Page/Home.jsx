import React from "react";
import bg from "../assets/home-img.png";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="container ">
        <div
          data-aos="zoom-out"
          className="animated-bg w-full h-[60vh] md:h-[70vh] lg:h-[80vh]
          rounded-3xl md:rounded-4xl relative"
        >
          <img
            data-aos="zoom-in-up"
            src={bg}
            alt="home"
            className="w-87  h-87 min-[540px]:w-94 min-[500px]:h-94  mx-auto object-cover md:hidden"
          />
          <img
            data-aos="zoom-in-up"
            src={bg}
            alt="home"
            className="absolute -top-15 -left-35 min-[540px]:w-[80wh] min-[500px]:h-[80wh] object-cover hidden md:block"
          />
          <div className="absolute right-5 top-15 text-right flex flex-col gap-3 md:gap-7 lg:gap-8">
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-[#7A5C33] text-xl lg:text-2xl font-bold"
            >
              {t("home.top")}
            </h1>
            <h2
              data-aos="fade-left"
              data-aos-duration="1500"
              className="text-[#A17F4A] text-3xl font-medium lg:text-5xl"
            >
              {t("home.title")}
            </h2>
            <h3
              data-aos="fade-left"
              data-aos-duration="2000"
              className="text-[#A07E49] text-4xl md:text-6xl font-medium lg:pt-3 lg:text-[80px]"
            >
              {t("home.description")}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
