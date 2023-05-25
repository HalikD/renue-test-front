import React, { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { products } from "../../resources/products";
import "./ItemList.css";

const ItemList = ({ userBalance, setUserBalance }) => {
  const [items, setItems] = useState(products);

  const onBuyItem = (product) => {
    setUserBalance(userBalance - product.price);
    const updatedItems = items.map((item) => {
      if (item.id === product.id) {
        let newCount = item.count - 1;
        return { ...item, count: newCount };
      }
      return item;
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
