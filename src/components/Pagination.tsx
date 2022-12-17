import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Pagination = () => {

  const {allPost, setAllPosts, currentPage, totalPosts, pages, goToNextPage, goToPreviousPage} = useStateContext() as any ;
  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-white">
          Total <span className="font-medium">{totalPosts}</span> posts{" "}
          
        </p>
      </div>
      <div>
        <p className="text-sm text-white">
          Showing <span className="font-medium">{currentPage + 1 }</span> of{" "}
          <span className="font-medium">{pages}</span> pages
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px aria-label='Pagination'">
            <a
                href="#"
                className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                onClick={() => {
                  goToPreviousPage() ; 
                }}
            >
                <span>Previous</span>
            </a>
            <a
            onClick={() => {
              goToNextPage() ; 
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Next</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
