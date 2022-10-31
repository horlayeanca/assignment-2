import React, { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const technologies = [
    {
      id: 1,
      branch: "Frontend",
      language: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      branch: "Backend",
      language: ["Python", "Java", "PHP", "SQL", "Git"],
    },
    {
      id: 3,
      branch: "Cloud Engineering",
      language: ["Python", "Java", "Ruby", "Golang", "ASP.NET"],
    },
    {
      id: 4,
      branch: "Data Engineering",
      language: ["Python", "SQL", "PySpark"],
    },
    {
      id: 5,
      branch: "AI",
      language: "Python",
    },
  ];
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  useState(() => {
    if (searchInput.length > 0) {
      technologies.filter((technology) => {
        return technology.branch.match(searchInput);
      }, []);
    }
  });

  return (
    <div className="">
      <div className="flex justify-center items-center w-full mt-20">
        <input
          type="text"
          placeholder="Search here.."
          onChange={handleChange}
          value={searchInput}
          className="border-2 rounded-xl p-2 px-3 mt-16"
        ></input>
      </div>

      <table>
        <tr>
          <th>Technology</th>
          <th>Skill</th>
        </tr>
        {technologies.map((branch) => {
          return (
            <div>
              <tr>
                <td>{technologies.branch}</td>
                <td>{technologies.language}</td>
              </tr>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default Search;
