import React, { useRef, useEffect } from "react";
import { Sidebar, Navbar } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Layout = ({ children }) => {
  const { activeMenu } = useStateContext();
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
      <div ref={divRef} className="relative flex">
        <div className="relative">
          <Sidebar />
        </div>

        <div className="pt-10 pr-5">{children}</div>
      </div>
    </>
  );
};

export default Layout;
