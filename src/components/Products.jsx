import React from "react";
import ReactPaginate from "react-paginate";

function Products() {
  const handleClick = (data) => {
    console.log(data.selected);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={3}
        onPageChange={handleClick}
        className="grid grid-flow-col items-center w-full justify-center h-screen"
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
