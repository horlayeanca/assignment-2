import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="flex">
        <div className="flex gap-5 mx-auto mt-12">
          <Link
            to="/search"
            className="bg-teal-600 px-12 py-4 rounded-xl text-white font-bold hover:bg-teal-800 hover:scale-105 duration-300"
          >
            Search
          </Link>
          <Link
            to="/profile"
            className="bg-teal-600 px-12 py-4 rounded-xl text-white font-bold hover:bg-teal-800 hover:scale-105 duration-300"
          >
            Profile
          </Link>
          <Link
            to="/contact"
            className="bg-teal-600 px-12 py-4 rounded-xl text-white font-bold hover:bg-teal-800 hover:scale-105 duration-300"
          >
            Contact
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Home;
