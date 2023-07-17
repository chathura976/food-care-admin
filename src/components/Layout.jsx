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
      <div ref={divRef} className="relative">
        <div className="fixed top-0 z-50">
          <Navbar />
        </div>
        <div className="flex">
          <div className="relative">
            {activeMenu ? (
              <div className="w-72 sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
          </div>
          <div className="flex-1 relative">
            <div className= "pt-10 pr-5">{children}</div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Layout;
