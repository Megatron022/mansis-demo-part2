// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
     console.log("Route changed → scrolling to top", pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("srolled to top");

    
    document.body.style.overflowX = "hidden"; 
    document.documentElement.style.overflowX = "hidden";

    return () => {
     
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
    };
  }, [pathname]);
return null;
}