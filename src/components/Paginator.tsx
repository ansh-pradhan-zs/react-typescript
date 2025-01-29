import React, { ReactElement, useEffect, useState } from "react";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

const Paginator = ({
  children,
  pages,
  itemsPerPage,
}: {
  children: ReactElement;
  pages: number;
  itemsPerPage: number;
}) => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [expandPaginator, setExpandPaginator] = useState<boolean>(false);
  const [pagesArr, setPagesArr] = useState<number[]>([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const tempArr = [];
    for (let i = 1; i <= pages; i++) {
      tempArr.push(i);
    }
    setPagesArr(tempArr);
  }, []);

  function incrementPage() {
    if (currPage === 10) return;
    else if (currPage === Math.floor(pages / 2)) {
      setExpandPaginator(true);
    }
    setCurrPage(currPage + 1);
    setActivePage(currPage + 1);
  }
  function decrementPage() {
    if (currPage === 1) return;
    else if (currPage === Math.floor(pages / 2) + 1) {
      setExpandPaginator(false);
    }
    setCurrPage(currPage - 1);
    setActivePage(currPage - 1);
  }

  function switchToExtremes(extreme: "left" | "right") {
    if (extreme === "left") {
      setCurrPage(1);
      setActivePage(1);
      setExpandPaginator(false);
    } else {
      setCurrPage(pages);
      setActivePage(pages);
      setExpandPaginator(true);
    }
  }

  return (
    <div className="paginator">
      <div>
        {React.cloneElement(children, { currPage, setCurrPage, itemsPerPage })}
      </div>

      <div className="pagination-control">
        <button className="button">
          <FaAnglesLeft
            size={24}
            color="black"
            onClick={() => switchToExtremes("left")}
          />
        </button>
        <button className="button">
          <FaChevronLeft size={24} color="black" onClick={decrementPage} />
        </button>
        {/* Pages div */}
        <div className="pages-container">
          <button
            className={`button expander ${expandPaginator ? "" : "hidden"}`}
            onClick={() => setExpandPaginator(!expandPaginator)}
          >
            ...
          </button>
          <div className="pages">
            {pagesArr
              .slice(
                expandPaginator ? Math.floor(pages / 2) : 0,
                expandPaginator ? pages : Math.floor(pages / 2)
              )
              .map((pageNo, index) => {
                return (
                  <button
                    key={index}
                    className={`button pages-padding ${
                      activePage === pageNo ? "active" : ""
                    }`}
                    onClick={() => {
                      setCurrPage(pageNo);
                      setActivePage(pageNo);
                    }}
                  >
                    {pageNo}
                  </button>
                );
              })}
          </div>

          <button
            className={`button expander ${expandPaginator ? "hidden" : ""}`}
            onClick={() => setExpandPaginator(!expandPaginator)}
          >
            ...
          </button>
        </div>
        <button className="button">
          <FaChevronRight size={24} color="black" onClick={incrementPage} />
        </button>
        <button className="button">
          <FaAnglesRight
            size={24}
            color="black"
            onClick={() => switchToExtremes("right")}
          />
        </button>
      </div>
    </div>
  );
};

export default Paginator;
