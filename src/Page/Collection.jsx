import React, { useLayoutEffect, useState, useEffect } from "react";
import winter from "../data/Winter";
import autum from "../data/Autumn";
import summer from "../data/Summer";
import { useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart, FaSearch } from "react-icons/fa";
import useLikeStore from "../store/likeStore";
import { useNavigate } from "react-router-dom";
import { ImSpinner } from "react-icons/im";

function Collection() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { likedItems, toggleLike } = useLikeStore();
  const { t } = useTranslation();

  const allItems = winter.concat(autum, summer);
  const [activeSeason, setActiveSeason] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [isLoading, setIsLoading] = useState(false);
  const [typingLoader, setTypingLoader] = useState(false);

  const getItemsBySeason = (season) => {
    if (season === "winter") return winter;
    if (season === "autumn") return autum;
    if (season === "summer") return summer;
    return allItems;
  };

  const handleSeasonChange = (season) => {
    setIsLoading(true);
    setActiveSeason(season);
    setSearchTerm("");
    setTypingLoader(false);

    setTimeout(() => {
      setFilteredItems(getItemsBySeason(season));
      setIsLoading(false);
    }, 1000);
  };

  const seasonItems = getItemsBySeason(activeSeason);

  const suggestions = seasonItems.filter((item) =>
    t(item.title).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    setIsLoading(true);
    setTypingLoader(false);
    setTimeout(() => {
      const result = seasonItems.filter((item) =>
        t(item.title).toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(result);
      setSearchTerm("");
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      setTypingLoader(true);
      const delay = setTimeout(() => {
        setTypingLoader(false);
      }, 300);
      return () => clearTimeout(delay);
    } else {
      setTypingLoader(false);
    }
  }, [searchTerm]);

  const handleNavigation = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <div className="container">
        <div className="flex flex-col md:flex-row h-screen">
          <div className="md:w-4/12 lg:w-6/20 w-full h-auto relative">
            <div>
              <div className="flex justify-between bg-gray-300 rounded-4xl pl-5 py-2 px-2">
                <input
                  type="text"
                  placeholder={t("collection.search")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="outline-none w-full"
                />
                <button
                  onClick={handleSearch}
                  className="bg-red-500 w-12 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <FaSearch className="text-white text-2xl" />
                </button>
              </div>

              {/* Suggestion box with loader */}
              <div className="absolute z-10 bg-white rounded-xl w-full shadow-md mt-2 max-h-60 overflow-y-auto">
                {typingLoader && (
                  <div className="text-gray-500">
                    <ImSpinner className="text-4xl mx-auto animate-spin" />
                  </div>
                )}
                {!typingLoader && searchTerm.trim() && (
                  <>
                    {suggestions.length > 0 ? (
                      suggestions.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleNavigation(item.id)}
                        >
                          <img
                            src={item.img}
                            alt={t(item.title)}
                            className="w-10 h-10 object-cover rounded-md"
                          />
                          <span className="text-sm">{t(item.title)}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-2 text-gray-500 text-sm">
                        {t("collection.no")}
                      </div>
                    )}
                  </>
                )}
              </div>

              <h3 className="hidden md:block text-center font-bold text-3xl mt-5">
                {t("collection.collection")}
              </h3>

              <div className="flex md:flex-col w-full overflow-x-scroll gap-5 mb-6 mt-5 whitespace-nowrap">
                {["all", "winter", "autumn", "summer"].map((season) => (
                  <button
                    key={season}
                    onClick={() => handleSeasonChange(season)}
                    className={`px-4 py-1 md:font-medium text-white ${
                      activeSeason === season
                        ? "bg-red-500 md:bg-transparent md:text-amber-300 text-white"
                        : "bg-black md:bg-transparent md:text-black/60"
                    } cursor-pointer md:p-0 rounded-2xl`}
                  >
                    {t(`collection.${season}`)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-8/12 lg:w-14/20 w-full h-screen overflow-x-scroll scrolNone">
            {isLoading ? (
              <div className="mt-50 flex justify-center items-center text-gray-500">
                <ImSpinner className="text-9xl animate-spin" />
              </div>
            ) : (
              <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => {
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
                        <div>
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
                  })
                ) : (
                  <p className="col-span-full text-center text-gray-500 text-lg mt-10">
                    {t("collection.no")}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
