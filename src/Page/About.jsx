import React, { useLayoutEffect } from "react";
import img from "../assets/aboutImg.png";
import { useTranslation } from "react-i18next";

const texts = [
  {
    id: 1,
    text: "about.text1",
  },
  {
    id: 2,
    text: "about.text2",
  },

  {
    id: 4,
    text: "about.text4",
  },
  {
    id: 5,
    text: "about.text5",
  },
  {
    id: 6,
    text: "about.text6",
  },
  {
    id: 7,
    text: "about.text7",
  },
  {
    id: 8,
    text: "about.text8",
  },
  {
    id: 9,
    text: "about.text9",
  },
  {
    id: 10,
    text: "about.text10",
  },
  {
    id: 11,
    text: "about.text11",
  },
  {
    id: 12,
    text: "about.text12",
  },
];
function About() {

  const { t } = useTranslation();
  return (
    <div>
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row md:items-center gap-10">
          <div className="">
            <h2 className="text-[18px] pb-3 font-medium lg:text-[23px]">
              {t("about.title")}
            </h2>
            <div className="">
              {texts.map((item) => (
                <p
                  key={item.id}
                  className="text-[10px] md:text-[12px] text-gray-600 lg:text-[13px]"
                >
                  {t(item.text)}
                </p>
              ))}
            </div>
          </div>
          <img
            src={img}
            alt=""
            className="w-full object-cover lg:w-[60%] rounded-3xl shadow-[0_0_15px_#00000070]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
