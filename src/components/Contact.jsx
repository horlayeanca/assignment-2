import React from "react";

function Contact() {
  return (
    <div>
      <div className="py-8 text-center">
        <h1 className="text-4xl text-center font-bold inline border-gray-500">
          Contact
        </h1>
        <p className="py-3">Please feel free to reach out to use.</p>
      </div>
      <div className="flex justify-center ">
        <form action="" method="" className="flex flex-col w-full md:w-1/2">
          <input
            type="text"
            placeholder="Enter your name here.."
            className="p-2 bg-transparent border-2 m-2 rounded-md text-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter your email here.."
            className="p-2 bg-transparent border-2 m-2 rounded-md text-black focus:outline-none"
          />
          <textarea
            type="text"
            rows={10}
            placeholder="Message.."
            className="p-2 bg-transparent border-2 m-2 rounded-md text-black focus:outline-none"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="text-white px-6 py-3 my-8 mx-auto flex items-center bg-teal-600 rounded-lg hover:scale-110 duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
