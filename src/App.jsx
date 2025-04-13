import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Sayt to‘liq yuklandi, loadingni o‘chirish
    };

    if (document.readyState === "complete") {
      // Agar sahifa to‘liq yuklangan bo‘lsa, darhol loadingni o‘chiramiz
      setTimeout(() => {
        setLoading(false);
      }, 1000); // 1 soniya kutish
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
    return <Loading />;
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
