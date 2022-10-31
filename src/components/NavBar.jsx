import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const navigations = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "products",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <div className="bg-slate-600 h-16">
      <ul className="flex items-center justify-evenly top-0 left-0 w-full p-4 text-white">
        {navigations.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:text-rose-400 duration-300 hover:scale-105"
          >
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
