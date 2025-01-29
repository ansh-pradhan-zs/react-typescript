import React, { useEffect, useState } from "react";
import ItemCardComponent from "./ItemCardComponent";
import { ItemType } from "../../types";

interface props {
  currPage: number;
  itemsPerPage: number;
}

const ToBePaginated = ({ currPage, itemsPerPage }: props) => {
  const [items, setItems] = useState<ItemType[]>([]);

  async function populateItems() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      setItems(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    populateItems();
  }, []);

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
