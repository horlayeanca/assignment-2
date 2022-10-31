import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `http://localhost:3004/comments?_page=1&_limit=12`
      );
      const data = await res.json();
      setItems(data);
    };

    getComments();
  }, []);

  console.log(items);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3004/comments?_page=${currentPage}&_limit=12`
    );
    const data = await res.json();
    return data;
  };
  const handleClick = (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFromServer = fetchComments(currentPage);

    setItems(commentsFromServer);
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <divv className="flex w-full ">
            <div className="card flex mb-4 w-1/3 flex-col">
              <div className="card">
                <h5 className="">Comment No. {item.id}</h5>
                <h6 className="">{item.email}</h6>
                <p className="">{item.body}</p>
              </div>
            </div>
          </divv>
        );
      })}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={3}
        onPageChange={handleClick}
        className="grid grid-flow-col items-center w-full justify-center"
        pageClassName="border-2 py-1 px-2 border-gray-400 hover:text-blue-500"
        previousClassName="border-2 py-1 px-2 border-gray-400 hover:text-blue-500"
        nextClassName="border-2 py-1 px-2 border-gray-400 hover:text-blue-500"
        breakClassName="border-2 py-1 px-2 border-gray-400 hover:text-blue-500"
        activeClassName=""
      />
    </div>
  );
}

export default Products;
