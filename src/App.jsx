import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import { useTranslation } from "react-i18next";
import logo from "./assets/logo.png";

function App() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Sayt to‘liq yuklandi, loadingni o‘chirish
    };

    if (document.readyState === "complete") {
      // Agar sahifa to‘liq yuklangan bo‘lsa, darhol loadingni o‘chiramiz
      setTimeout(() => {
        setLoading(false);
      }, 1500); // 1 soniya kutish
    } else {
      // Agar sahifa hali to‘liq yuklanmagan bo‘lsa, `load` hodisasini tinglaymiz
      window.addEventListener("load", handleLoad);
    }

    // Component unmount bo‘lsa, event listenerni olib tashlash
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return (
      <div className="w-full text-[#d4a75e] bg-white h-screen flex justify-center items-center relative">
        <ImSpinner9 className="text-[220px] md:text-[270px] animate-spin" />
        <img src={logo} alt="" className="absolute top-30 md:top-20 w-70" />
        <div className="absolute font-bold">{t("site.loading")}</div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="pt-23">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
