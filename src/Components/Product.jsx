import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import home from "../data/home";
import { useTranslation } from "react-i18next";

function Product() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const { t } = useTranslation();
  const item = home.find((item) => item?.id?.toString() === id);
  console.log(item);
  return (
    <div>
      <div className="max-w-5xl mx-auto px-[1rem]">
        <div className="">
          <img src={item?.img} alt="" className="w-full rounded-3xl" />
          <div className="flex gap-5 mt-3 mb-3 text-sm">
            <p className="text-red-500">10/05/2019</p>
            <p className="">{t("news.by")}</p>
          </div>
          <h3 className="text-2xl">{t(item?.title)}</h3>
          <div className="text-sm flex flex-col gap-5 text-gray-500 mt-3">
            <p className="">{t("news.texts.1")}</p>
            <p className="">{t("news.texts.2")}</p>
            <p className="">{t("news.texts.3")}</p>
            <p className="">{t("news.texts.4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
