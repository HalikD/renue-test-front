import React, { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { products } from "../../resources/products";
import "./ItemList.css";

const ItemList = ({ userBalance, setUserBalance }) => {
  const [items, setItems] = useState(products);

  const onBuyItem = (item) => {
    setUserBalance(userBalance - item.price);
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
        <ItemCard
          key={item.id}
          item={item}
          userBalance={userBalance}
          onBuyItem={onBuyItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
