import React, { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { products } from "../../utils";
import "./ItemList.css";

const ItemList = ({ cash, setCash }) => {
  const [items, setItems] = useState(products);

  const onBuyItem = (item) => {
    //TODO: create expanding window
    setCash(cash - item.price);
    const updatedItems = items.map((p) => {
      if (p.id === item.id) {
        let newCount = p.count - 1;
        return { ...p, count: newCount };
      }
      return p;
    });
    setItems(updatedItems);
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} cash={cash} onBuyItem={onBuyItem} />
      ))}
    </div>
  );
};

export default ItemList;
