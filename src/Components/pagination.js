import React from "react";
import ReactPaginate from "react-paginate";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({ pageCount, handlePageChange }) => {
  return (
    <div>
      <ReactPaginate
        className="flex p-0"
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        onPageChange={handlePageChange}
        nextLabel={
          <div className="px-1 py-1 mx-1 border border-gray-200 rounded-md">
            <MdNavigateNext />
          </div>
        }
        previousLabel={
          <div className="px-1 py-1 mx-1 border border-gray-200 rounded-md">
            <GrFormPrevious />
          </div>
        }
        pageClassName="w-6 h-6 md:w-8 md:h-8 text-center border border-gray-200 rounded-md mx-1 text-sm md:text-lg"
        activeClassName="bg-blue-500 text-white"
      />
    </div>
  );
};

export default Pagination;
