import React from "react";
import { Link } from "react-router-dom";

const SidebarRow = (props) => {
  return (
    <li className="mt-4">
      <Link
        to={props.path}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-columns-gap"
          viewBox="0 0 16 16"
          id="IconChangeColor"
        >
          {" "}
          <path
            d={props.icon}
            id="mainIconPathAttribute"
          ></path>{" "}
        </svg>

        <span className="flex-1 ml-3 whitespace-nowrap">{props.title}</span>
      </Link>
    </li>
  );
};

export default SidebarRow;
