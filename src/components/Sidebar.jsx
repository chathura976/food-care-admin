import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard, MdOutlineFastfood } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { BsCalendarMonth } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare} from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Users", link: "/Users", icon: AiOutlineUser },
    { name: "Chat", link: "/Chat", icon: FiMessageSquare },
    { name: "FoodPosts", link: "/FoodPosts", icon: MdOutlineFastfood },
    { name: "Calendar", link: "/Calender", icon: BsCalendarMonth },
    { name: "Settings", link: "/", icon: RiSettings4Line },
  ];

  const [open, setOpen] = useState(true);



  return (
    <div className="flex gap-6 main-content">
      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 ${
          open ? "w-72" : "w-16"
        } h-screen transition-transform -translate-x-full sm:translate-x-0`}
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

          <motion.div transition={{ duration: 0.5 }}>
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
          </motion.div>
        </div>
      </aside>

      <div className={`ml-auto ${open ? "mr-72" : "mr-16"}`}>
        <Navbar sidebarOpen={open} />

        {/* Render your navbar items here */}
        {/* Adjust the CSS classes and layout based on your specific navbar implementation */}
      </div>
    </div>
  );
};

export default Sidebar;
