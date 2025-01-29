import React from "react";
import { ItemType } from "../../types";

const ItemCardComponent = ({ id, url }: ItemType) => {
  return (
    <div className="item-container">
      <img src={url} alt="dog pic" />
      <span>{id}</span>
    </div>
  );
};

export default ItemCardComponent;
