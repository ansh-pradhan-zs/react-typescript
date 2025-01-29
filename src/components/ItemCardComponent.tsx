import React from "react";
import { ItemType } from "../../types";

const ItemCardComponent = ({ title, url }: ItemType) => {
  return (
    <div className="item-container">
      <div className="img-div">
        <img src={url} alt="dog pic" />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default ItemCardComponent;
