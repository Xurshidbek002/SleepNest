import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Pages from "./Components/Pages";
import Loading from "./Components/Loading";
import Aos from "aos";
import "aos/dist/aos.css";

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
      {loading && <Loading />}
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
