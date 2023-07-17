import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard, MdOutlineFastfood } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { BsCalendarMonth } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Users", link: "/", icon: AiOutlineUser },
    { name: "Chat", link: "/", icon: FiMessageSquare },
    { name: "FoodPosts", link: "/", icon: MdOutlineFastfood },
    { name: "Calendar", link: "/", icon: BsCalendarMonth },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];

  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="flex gap-6 main-content">
      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 ${open ? "w-72" : "w-16"} h-screen transition-transform -translate-x-full sm:translate-x-0`}
        aria-label="Sidebar"
        style={{ overflow: "auto" }}
      >
        <div
          className={`bg-gray-900 min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <span
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </span>
                <span
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
