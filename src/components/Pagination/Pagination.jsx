import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, setPageNumber, pageChange }) => {

    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };
    
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <>
    {/* <style jsx>
    {`
    a {
        color: white; text-decoration: none;
    }
    @media (max-width: 768px) {
        .pagination {font-size: 12px}

        .next,
        .prev {display: none}
    }
    @media (max-width: 768px) {
        .pagination {font-size: 14px}
    }
    `}
    </style> */}
    <ReactPaginate
        className="pagination flex justify-center items-center mt-4 pb-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        breakClassName="bg-green-500 hover:bg-teal-400 text-gray-800 font-bold py-2 px-4"
        previousLabel="Prev"
        previousClassName="bg-green-500 hover:bg-teal-400 text-gray-800 font-bold py-2 px-4 rounded-l prev"
        nextClassName="bg-green-500 hover:bg-teal-400 text-gray-800 font-bold py-2 px-4 rounded-r next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item bg-green-500 hover:bg-teal-400 text-gray-800 font-bold py-2 px-4"
        pageLinkClassName="page-link"
      />
    </>
    )

}

export default Pagination;