import React, { ReactElement, useEffect, useState } from "react";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { ProductsEntity } from "../../types";

const Paginator = ({
  children,
  items,
  itemsPerPage,
}: {
  children: ReactElement;
  items: ProductsEntity[];
  itemsPerPage: number;
}) => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [pagesArr, setPagesArr] = useState<number[]>([]);
  const [activePage, setActivePage] = useState(1);
  const pages = Math.ceil(items.length / itemsPerPage);

  //
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  useEffect(() => {
    const tempArr = [];

    for (let i = 1; i <= pages; i++) {
      tempArr.push(i);
    }
    setPagesArr(tempArr);
  }, [items, pages]);

  function incrementPage() {
    if (currPage === pages) {
      setCurrPage(1);
      setActivePage(1);
      setStartIndex(0);
      setEndIndex(5);
      return;
    } else if (currPage === endIndex) {
      setStartIndex((prev) => prev + 5);
      setEndIndex((prev) => prev + 5);
    }
    setCurrPage(currPage + 1);
    setActivePage(currPage + 1);
  }
  function decrementPage() {
    if (currPage === 1) {
      setCurrPage(pages);
      setActivePage(pages);
      setStartIndex(pages - 5);
      setEndIndex(pages);
      return;
    } else if (currPage === startIndex + 1) {
      setStartIndex((prev) => prev - 5);
      setEndIndex((prev) => prev - 5);
    }

    setCurrPage(currPage - 1);
    setActivePage(currPage - 1);
  }

  function switchToExtremes(extreme: "left" | "right") {
    if (extreme === "left") {
      setCurrPage(1);
      setActivePage(1);
      setStartIndex(0);
      setEndIndex(5);
    } else {
      setCurrPage(pages);
      setActivePage(pages);
      setStartIndex(pages - 5);
      setEndIndex(pages);
    }
  }

  return (
    <div className="paginator">
      <div>
        {React.cloneElement(children, {
          currPage,
          setCurrPage,
          itemsPerPage,
          items,
        })}
      </div>

      <div className="pagination-control">
        <button className="button" onClick={() => switchToExtremes("left")}>
          <FaAnglesLeft size={24} color="black" />
        </button>
        <button className="button" onClick={decrementPage}>
          <FaChevronLeft size={24} color="black" />
        </button>
        {/* Pages div */}
        <div className="pages-container">
          <div className="pages">
            {pagesArr.slice(startIndex, endIndex).map((pageNo, index) => {
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
        </div>
        <button className="button" onClick={incrementPage}>
          <FaChevronRight size={24} color="black" />
        </button>
        <button className="button" onClick={() => switchToExtremes("right")}>
          <FaAnglesRight size={24} color="black" />
        </button>
      </div>
    </div>
  );
};

export default Paginator;
