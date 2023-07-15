import React, { useRef, useEffect } from "react";
import { Sidebar, Navbar } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Layout = ({ children }) => {
  const { activeMenu } = useStateContext();
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbarHeight = navbarRef.current.offsetHeight;
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.style.paddingTop = `${navbarHeight}px`;
    }
  }, []);

  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div
            ref={navbarRef}
            className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"
          >
            <Navbar />
          </div>
          <div className="dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full">
            <div className="p-8">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
