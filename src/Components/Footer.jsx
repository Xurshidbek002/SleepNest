import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="pt-15">
      <div className="container">
        <div className="flex items-start justify-center md:justify-between flex-wrap gap-5 py-9">


          <div className="max-w-100 text-center md:text-left">
            <img
              src={logo}
              alt="Sleepnest Logo"
              className="w-60 md:w-80 mx-auto md:mx-0"
            />
            <p className="text-[12px] text-gray-500 pt-3 pb-3">
              {t("footer.text")}
            </p>
          </div>


          <div className="text-center md:text-left">
            <h2 className="font-bold mb-3 text-gray-600 uppercase text-sm">
              {t("footer.menu.title")}
            </h2>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" activclassname="active" className="">
                  {t("footer.menu.1")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/collection" activclassname="active" className="">
                  {t("footer.menu.2")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activclassname="active" className="">
                  {t("footer.menu.3")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activclassname="active" className="">
                  {t("footer.menu.4")}
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-bold mb-3 text-gray-600 uppercase text-sm">
              {t("footer.contact.title")}
            </h2>
            <address className="not-italic space-y-2">
              <p className="text-sm">{t("footer.contact.1")}</p>
              <p className="text-sm">{t("footer.contact.2")}</p>
              <p className="text-sm">{t("footer.contact.3")}</p>
              <a href="tel:+998940337212" className="text-sm">
                +998 94 033 72 12
              </a>
            </address>
          </div>

          {/* Email subscription */}
          <div className="text-center md:text-left">
            <h2 className="font-bold mb-3 text-gray-600 uppercase">
              {t("footer.sub.title")}
            </h2>
            <div className="flex justify-between items-center cursor-pointer border-2 border-gray-300 rounded-2xl px-2 py-2">
              <input
                type="email"
                placeholder={t("footer.sub.title")}
                className=" py-2 outline-none text-sm"
              />
              <button className="bg-red-400 cursor-pointer hover:shadow-[0_0_10px_#00000080] rounded-xl text-white px-4 py-2 text-[9px] md:text-sm hover:bg-red-500">
                {t("footer.sub.btn")}
              </button>
            </div>
            <p className="text-xs mt-2 text-gray-500">{t("footer.sub.text")}</p>
          </div>
        </div>
      </div>
      <div className=" bg-[#17233e] text-white py-7">
        <div className="container">{t("footer.sub.bottom")}</div>
      </div>
    </footer>
  );
};

export default Footer;
