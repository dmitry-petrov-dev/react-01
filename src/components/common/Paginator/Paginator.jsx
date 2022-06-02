import React from "react";
import classes from "./Paginator.module.css";

const Paginator = ({ currentPage, totalCount, pageSize, onPageChanged }) => {
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p && classes.selectedPage}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p + " "}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
