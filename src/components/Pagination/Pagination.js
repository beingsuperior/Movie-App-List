/*

  Reusable Component
  
*/

import React from "react";
import { Pagination as PaginationReactBootstrap } from "react-bootstrap";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pages = new Array(Math.ceil(totalItems / itemsPerPage)).fill(0);

  return (
    <div>
      <PaginationReactBootstrap className="justify-content-center" size="md">
        {pages.map((_value, index) => {
          const number = index + 1;
          return (
            <PaginationReactBootstrap.Item
              key={number}
              active={number === currentPage}
              onClick={() => paginate(number)}
            >
              {number}
            </PaginationReactBootstrap.Item>
          );
        })}
      </PaginationReactBootstrap>
    </div>
  );
};

export default Pagination;
