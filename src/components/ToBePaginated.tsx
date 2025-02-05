import React, { useEffect, useState } from "react";
import ItemCardComponent from "./ItemCardComponent";
import { ItemType } from "../../types";

interface props {
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
}

const ToBePaginated = ({ currPage, setCurrPage }: props) => {
  const [items, setItems] = useState<ItemType[]>([]);

  function populateItems() {
    const tempItems = [];
    for (let i = 0; i < 10; i++) {
      const obj: ItemType = {
        id: i,
        url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
      };
      tempItems.push(obj);
    }

    setItems(tempItems);
  }

  useEffect(() => {
    populateItems();
  }, []);

  return (
    <main className="boss-container">
      <span>Pagination Assignment</span>
      <div className="main-container">
        {items.map((item, index) => {
          return <ItemCardComponent key={index} id={item.id} url={item.url} />;
        })}
      </div>
    </main>
  );
};

export default ToBePaginated;
