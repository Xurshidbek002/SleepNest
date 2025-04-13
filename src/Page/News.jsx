import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import home from "../data/home";

function News() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const hendleNavigate = (id) => {
    navigate(`product/${id}`);
  };

  return (
    <div>
      <div className="">
        <div className="container">
          <h2 className="text-center text-4xl font-bold">{t("news.title")}</h2>
          <p className="text-center text-gray-500 pt-2">{t("news.text")}</p>
          <div className="grid pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10">
            {home.map((item) => (
              <div
                key={item.id}
                onClick={() => hendleNavigate(item.id)}
                className="cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={t(item.title)}
                  className="rounded-3xl w-full"
                />
                <div className="flex gap-5 py-3">
                  <p className="text-[12px]">10/05/2024</p>
                  <p className="text-[12px] text-gray-500">{t("news.by")}</p>
                </div>
                <h2 className="font-bold pb-2">{t(item.title)}</h2>
                <p className="text-sm text-gray-500">{t(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
