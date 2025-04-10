import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import Aos from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setTimeout(() => {
        setLoading(false);
        initializeAOS(); // Loading tugagandan keyin AOS ni ishga tushiramiz
      }, 1000);
    } else {
      window.addEventListener("load", () => {
        handleLoad();
        initializeAOS(); // Loading tugagandan keyin AOS ni ishga tushiramiz
      });
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const initializeAOS = () => {
    Aos.init({
      duration: 1000,
      once: true,
    });
    Aos.refresh();
  };

  return (
    <div>
      {/* {loading && <Loading />} */}
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
