import React, { useRef, useEffect } from "react";
import { Sidebar } from "../components";
import {LineChart} from "../components";
const Layout = ({ children }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        divRef.current.style.width = `${window.innerWidth}px`;
        divRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div  className="relative flex w-divRef.current.style.width pl-10 pr-10">
        <div className="relative">
          <Sidebar />
        </div>

        <div ref={divRef} className="flex items-center">
          {children}
          
        </div>
      </div>
    </>
  );
};

export default Layout;
