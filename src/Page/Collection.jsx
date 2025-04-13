import React, { useLayoutEffect, useState } from "react";
import winter from "../data/Winter";
import autum from "../data/Autumn";
import summer from "../data/Summer";
import { useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart, FaSearch } from "react-icons/fa";
import useLikeStore from "../store/likeStore";
import { useNavigate } from "react-router-dom";

function Collection() {
   useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate(`/details/${id}`);
  };

  const { likedItems, toggleLike } = useLikeStore();
  const { t } = useTranslation();

  const allItems = winter.concat(autum, summer);
  const [activeSeason, setActiveSeason] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSeasonChange = (season) => {
    setActiveSeason(season);
    setSearchTerm("");
  };

  let seasonItems;
  if (activeSeason === "winter") seasonItems = winter;
  else if (activeSeason === "autumn") seasonItems = autum;
  else if (activeSeason === "summer") seasonItems = summer;
  else seasonItems = allItems;

  const filteredItems = seasonItems.filter((item) =>
    t(item.title).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <div className="container">
        <div className="flex flex-col md:flex-row h-screen">
          <div className="md:w-4/12 lg:w-6/20 w-full h-auto">
            <div className="">
              <div className="flex justify-between bg-gray-300 rounded-4xl pl-5 py-2 px-2">
                <input
                  type="text"
                  placeholder={t("collection.search")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="outline-none w-full"
                />
                <button className="bg-red-500 w-12 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <FaSearch className="text-white text-2xl" />
                </button>
              </div>
              <h3 className="hidden md:block text-center font-bold text-3xl mt-5">
                {t("collection.collection")}
              </h3>
              <div className="flex md:flex-col w-full overflow-x-scroll gap-5 mb-6 mt-5 whitespace-nowrap">
                <button
                  onClick={() => handleSeasonChange("all")}
                  className={`px-4 py-1 md:font-medium text-white ${
                    activeSeason === "all"
                      ? "bg-red-500 md:bg-transparent md:text-amber-300 text-white"
                      : "bg-black md:bg-transparent md:text-black/60"
                  } cursor-pointer md:p-0 rounded-2xl`}
                >
                  {t("collection.all")}
                </button>
                <button
                  onClick={() => handleSeasonChange("winter")}
                  className={`px-4 py-1 md:font-medium text-white ${
                    activeSeason === "winter"
                      ? "bg-red-500 md:bg-transparent md:text-amber-300 text-white"
                      : "bg-black md:bg-transparent md:text-black/60"
                  } cursor-pointer md:p-0 rounded-2xl`}
                >
                  {t("collection.winter")}
                </button>
                <button
                  onClick={() => handleSeasonChange("autumn")}
                  className={`px-4 py-1 md:font-medium text-white ${
                    activeSeason === "autumn"
                      ? "bg-red-500 md:bg-transparent md:text-amber-300 text-white"
                      : "bg-black md:bg-transparent md:text-black/60"
                  } cursor-pointer md:p-0 rounded-2xl`}
                >
                  {t("collection.autumn")}
                </button>
                <button
                  onClick={() => handleSeasonChange("summer")}
                  className={`px-4 py-1 md:font-medium text-white ${
                    activeSeason === "summer"
                      ? "bg-red-500 md:bg-transparent md:text-amber-300 text-white"
                      : "bg-black md:bg-transparent md:text-black/60"
                  } cursor-pointer md:p-0 rounded-2xl`}
                >
                  {t("collection.summer")}
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-8/12 lg:w-14/20 w-full h-screen overflow-x-scroll scrolNone">
            <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
              {filteredItems.map((item) => {
                const isLiked = likedItems.some(
                  (likedItem) => likedItem.id === item.id
                );
                return (
                  <div
                    onClick={() => handleNavigation(item.id)}
                    key={item.id}
                    className="hover:text-red-500 cursor-pointer relative"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(item);
                      }}
                      className="absolute bg-white/80 text-red-500 w-8 h-8 flex items-center justify-center rounded-full top-2 right-2 z-3 text-xl"
                    >
                      {isLiked ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <div className="">
                      <div className="flex w-full h-40 rounded-xl overflow-hidden items-center justify-center ">
                        <img
                          src={item.img}
                          alt={t(item.title)}
                          className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-107"
                        />
                      </div>
                      <h2 className="text-md md:pt-1">{t(item.title)}</h2>
                    </div>
                  </div>
                );
              })}
              {filteredItems.length === 0 && (
                <p className="col-span-full text-center text-gray-500 text-lg mt-10">
                  {t("collection.no")}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
