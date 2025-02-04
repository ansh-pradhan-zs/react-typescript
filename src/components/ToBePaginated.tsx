import React, { useEffect, useState } from "react";
import ItemCardComponent from "./ItemCardComponent";
import { ItemType } from "../../types";

interface props {
  currPage: number;
  itemsPerPage: number;
  items: any[];
}

const ToBePaginated = ({ currPage, itemsPerPage, items }: props) => {
  const from = (currPage - 1) * itemsPerPage;
  const to = from + itemsPerPage;

  return (
    <main className="boss-container">
      <span>Pagination Assignment</span>
      <div className="main-container">
        {items.slice(from, to).map((item, index) => {
          return (
            <ItemCardComponent
              key={index}
              title={item.title}
              url={item.images[0]}
            />
          );
        })}
      </div>
    </main>
  );
};

export default ToBePaginated;
