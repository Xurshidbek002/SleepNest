import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Winter from "../data/Winter";
import Autumn from "../data/Autumn";
import Summer from "../data/Summer";
import { useTranslation } from "react-i18next";
import { MdErrorOutline } from "react-icons/md";
import { FaSpinner } from "react-icons/fa"; // loading uchun icon

function Details() {
  const { id } = useParams();
  const { t } = useTranslation();

  const [item, setItem] = useState(null); // item saqlanadi
  const [loading, setLoading] = useState(true); // loading holati

  useEffect(() => {
    setLoading(true); // boshlanishida loading yoqiladi

    // barcha kolleksiyalarni birlashtiramiz
    const allItems = Winter.concat(Autumn, Summer);
    const found = allItems.find((item) => item?.id?.toString() === id);

    // 0.5 soniyadan keyin loadingni o‘chiramiz (loadingni ko‘rsatish uchun)
    setTimeout(() => {
      setItem(found);
      setLoading(false);
    }, 500);
  }, [id]);

  // loading holati
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <FaSpinner className="animate-spin text-blue-500 text-[80px]" />
        <p className="mt-4 text-xl text-gray-600">loading</p>
      </div>
    );
  }

  // agar item topilmasa
  if (!item) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-96">
        <MdErrorOutline className="text-red-500 text-[200px]" />
        <h1 className="text-2xl font-bold text-red-500">
          {t("details.notfound")}
        </h1>
      </div>
    );
  }

  // agar item topilsa — normal sahifa ko‘rinadi
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={item.img}
          alt={item?.title}
          className="w-full h-full rounded-3xl"
        />
        <div>
          <h1 className="text-3xl font-bold">{t(item?.title)}</h1>
        </div>
      </div>
    </div>
  );
}

export default Details;
