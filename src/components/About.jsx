import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex w-full h-screen justify-center mt-5">
      <div className="mt-5">
        <h1 className="text-center text-3xl font-bold text-gray-700">
          About page
        </h1>
        <p className="mt-3 text-lg text-gray-700">
          Welcome to our About page.. This is where we tell you more about Us.
        </p>
        <p className="text-center text-lg text-gray-700">
          click{" "}
          <Link
            to="/"
            className="cursor-pointer text-red-500 italic hover:text-blue-700"
          >
            here &nbsp;
          </Link>
          to go back to the home page.
        </p>
      </div>
    </div>
  );
}

export default About;
