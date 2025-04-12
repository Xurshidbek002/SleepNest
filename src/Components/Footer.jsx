import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="">
      <div className="container">
        <div className="flex items-start justify-center md:justify-between flex-wrap gap-5 py-9">
          <div className="max-w-100 text-center md:text-left">
            <img src={logo} alt="Sleepnest Logo" className="w-80 mx-auto md:mx-0" />
            <p className="text-[12px] text-gray-500 pt-3 pb-3">
              Ecological Clean Sleep Products is a company that produces cotton
              fabrics for use all over the world for many years.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-bold mb-3 text-gray-600 uppercase text-sm">
              menu
            </h2>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" activclassname="active" className="">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/collection" activclassname="active" className="">
                  Collection
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activclassname="active" className="">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activclassname="active" className="">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contacts section */}
          <div className="text-center md:text-left">
            <h2 className="font-bold mb-3 text-gray-600 uppercase text-sm">
              Contacts
            </h2>
            <address className="not-italic space-y-2">
              <p className="text-sm">Bukhara, st. Alpomish 80</p>
              <p className="text-sm">Email: sleepnest@gmail.com</p>
              <p className="text-sm">Telegram: sleepnest</p>
              <p className="text-sm">+998 94 033 72 12</p>
            </address>
          </div>

          {/* Email subscription */}
          <div className="text-center md:text-left">
            <h2 className="font-bold mb-3 text-gray-600 uppercase">Subscribe to our email</h2>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="flex justify-between items-center cursor-pointer border-2 border-gray-300 rounded-2xl px-2 py-2">
                <input
                  type="email"
                  placeholder="Subscribe to our email"
                  className="px-4 py-2 outline-none text-sm"
                />
                <button className="bg-red-400 cursor-pointer hover:shadow-[0_0_10px_#00000080] rounded-xl text-white px-6 py-2 text-sm hover:bg-red-500 transition">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="text-xs mt-2 text-gray-500">
              Select at least one list.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
