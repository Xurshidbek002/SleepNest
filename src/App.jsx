import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import { useTranslation } from "react-i18next";
import logo from "./assets/noctella.png";
import { FaSpinner } from "react-icons/fa";

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
      }, 3500); // 1 soniya kutish
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
      <div className="w-full h-screen flex justify-center items-center relative">
        <div className="loader">
          <span></span>
          <span></span>
        </div>
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
