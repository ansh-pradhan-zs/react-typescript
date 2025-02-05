import React, { ReactElement, useState } from "react";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

const Paginator = ({
  children,
  pages,
}: {
  children: ReactElement;
  pages: number;
}) => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [expandPaginator, setExpandPaginator] = useState<boolean>(false);

  return (
    <div>
      {React.cloneElement(children, { currPage, setCurrPage })}

      <div className="pagination-control">
        <button className="button">
          <FaAnglesLeft size={24} color="black" />
        </button>
        <button className="button">
          <FaChevronLeft size={24} color="black" />
        </button>
        {/* Pages div */}
        <div className="pages">
          {Array(pages)
            .fill(0)
            .slice(0, expandPaginator ? 10 : 6)
            .map((_, index) => {
              if (index === 5)
                return (
                  <div className={`expand`}>
                    {/* <button
                      className={`button pages-padding hidden ${
                        expandPaginator ? "hidden" : ""
                      }`}
                    >
                      {index + 1}
                    </button> */}
                    <button
                      className="button"
                      onClick={() => setExpandPaginator(!expandPaginator)}
                    >
                      ...
                    </button>
                    <button
                      className={`button pages-padding  ${
                        expandPaginator ? "" : "hidden"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </div>
                );
              else
                return (
                  <button key={index} className="button pages-padding">
                    {index + 1}
                  </button>
                );
            })}
        </div>
        <button className="button">
          <FaChevronRight size={24} color="black" />
        </button>
        <button className="button">
          <FaAnglesRight size={24} color="black" />
        </button>
      </div>
    </div>
  );
};

export default Paginator;
