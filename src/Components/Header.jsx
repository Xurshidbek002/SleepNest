import React, { useEffect, useState } from "react";
import uz from "../assets/uz.png";
import ru from "../assets/ru.png";
import en from "../assets/eng.png";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import logo from "../assets/noctella.png";
import { NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import { FcLike } from "react-icons/fc";
import useLikeStore from "../store/likeStore";
import { AnimatePresence, motion } from "framer-motion";

const languages = [
  { code: "uz", img: uz },
  { code: "ru", img: ru },
  { code: "eng", img: en },
];

function Header() {
  const { likedItems } = useLikeStore();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      const index = languages.findIndex((l) => l.code === savedLang);
      if (index !== -1) {
        setCurrentIndex(index);
        i18n.changeLanguage(savedLang);
      }
    }
  }, []);
  const rotateLanguage = () => {
    const nextIndex = (currentIndex + 1) % languages.length;
    setCurrentIndex(nextIndex);
    i18n.changeLanguage(languages[nextIndex].code);
    localStorage.setItem("lang", languages[nextIndex].code);
  };
  const getLangOrder = () => {
    const prev = (currentIndex + languages.length - 1) % languages.length;
    const next = (currentIndex + 1) % languages.length;
    return [languages[prev], languages[currentIndex], languages[next]];
  };
  const orderedLangs = getLangOrder();

  return (
    <header className="fixed shadow-xl shadow-amber-500/10 w-full z-100 bg-amber-500/20 backdrop-blur-xl py-3">
      <div className="container flex justify-between items-center gap-5">
        <a href="/" className="z-51">
          <img src={logo} alt="" className="w-40" />
        </a>
        <div className="flex items-center gap-3 md:gap-9">
          <nav className="md:flex items-center md:gap-5 lg:gap-10 hidden ">
            <NavLink
              to="/"
              activeclassname="active"
              className="text-gray-600 lg:text-[19px] md:text-[14px] "
            >
              {t("header.home")}
            </NavLink>
            <NavLink
              to="/collection"
              activeclassname="active"
              className="text-gray-600 lg:text-[19px] md:text-[14px] "
            >
              {t("header.collection")}
            </NavLink>
            <NavLink
              to="/about"
              activeclassname="active"
              className="text-gray-600 lg:text-[19px] md:text-[14px] "
            >
              {t("header.about")}
            </NavLink>
            <NavLink
              to="/contact"
              activeclassname="active"
              className="text-gray-600 lg:text-[19px] md:text-[14px] "
            >
              {t("header.contact")}
            </NavLink>
            <NavLink
              to="/like"
              activeclassname="active"
              className="text-gray-600 lg:text-[17px]"
            >
              <div className="relative">
                <FcLike size={23} />
                {likedItems.length > 0 && (
                  <motion.span
                    key={likedItems.length}
                    initial={{ scale: 1 }}
                    animate={{ scale: [4, 1] }} // Avval kattalashib, keyin qaytadi
                    transition={{ duration: 0.2, ease: "easeOut" }} // Animatsiya tezligi
                    className="absolute -top-2 -right-2 text-[8px] text-white flex justify-center items-center rounded-full w-5 h-5 bg-gray-600/70"
                  >
                    {likedItems.length}
                  </motion.span>
                )}
              </div>
            </NavLink>
          </nav>

          <div
            className="flex items-center h-10 w-15 justify-center py-4 cursor-pointer"
            onClick={rotateLanguage}
          >
            {orderedLangs.map((lang, index) => (
              <img
                key={lang.code}
                src={lang.img}
                alt={lang.code}
                className={`transition-all duration-500 object-contain
            ${index === 1 ? "w-7 h-7 z-10 " : "w-3 h-3 opacity-50"}`}
              />
            ))}
          </div>
          <button onClick={toggleMenu} className="block md:hidden">
            {open ? <IoMdClose size={27} /> : <RiMenu2Line size={27} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full shadow-lg z-50"
          >
            <div className="w-full h-screen bg-white flex flex-col items-center pl-5 justify-start pt-40 gap-5 z-50">
              <NavLink
                onClick={toggleMenu}
                to="/"
                activeclassname="active"
                className="text-gray-600 lg:text-[17px] text-xl"
              >
                {t("header.home")}
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to="/collection"
                activeclassname="active"
                className="text-gray-600 lg:text-[17px] text-xl"
              >
                {t("header.collection")}
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to="/about"
                activeclassname="active"
                className="text-gray-600 lg:text-[17px] text-xl"
              >
                {t("header.about")}
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to="/contact"
                activeclassname="active"
                className="text-gray-600 lg:text-[17px] text-xl"
              >
                {t("header.contact")}
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to="/like"
                activeclassname="active"
                className="text-gray-600 lg:text-[17px]"
              >
                <div className="relative">
                  <FcLike size={23} />
                  {likedItems.length > 0 && (
                    <motion.span
                      key={likedItems.length} // Har length o'zgarganda qayta animatsiya bo'lishi uchun
                      initial={{ scale: 1 }}
                      animate={{ scale: [3, 1] }} // Avval kattalashib, keyin qaytadi
                      transition={{ duration: 0.2, ease: "easeOut" }} // Animatsiya tezligi
                      className="absolute -top-2 -right-2 text-[8px] text-white flex justify-center items-center rounded-full w-5 h-5 bg-gray-600/70"
                    >
                      {likedItems.length}
                    </motion.span>
                  )}
                </div>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
