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

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3004/comments?_page=${currentPage}&_limit=10`
    );
    const data = await res.json();
    return data;
  };
  const handleClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFromServer = await fetchComments(currentPage);

    setItems(commentsFromServer);
  };

  return (
    <div>
      <div className="grid grid-flow-col p-3">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {items.map((item) => {
            return (
              <div className="card">
                <div className="">
                  <div className="">
                    <h5 className="text-center text-xl p-3">
                      Comment No. {item.id}
                    </h5>
                    <h6 className="text-left font-bold pb-2">
                      email: {item.email}
                    </h6>
                    <p className="text-black text-justify">{item.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={3}
        onPageChange={handleClick}
        className="grid grid-flow-col items-center w-full justify-center mb-5"
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
