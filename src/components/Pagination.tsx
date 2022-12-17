import React from "react";

const Pagination = () => {
  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-white">
          Showing <span className="font-medium">1</span> of{" "}
          <span className="font-medium">10</span> pages
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px aria-label='Pagination'">
            <a
                href="#"
                className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
                <span>Previous</span>
            </a>
            <a
            onClick={() => {
             
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
