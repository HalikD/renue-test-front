import React, { useEffect, useState } from "react";
import "./ItemCard.css";

const ItemCard = ({ item, cash, onBuyItem }) => {
  const isCanBuy = cash > item.price && item.count;
  const [isFreezeBuy, setIsFreezeBuy] = useState(false);
  const [isShakingImg, setIsShakingImg] = useState(false);
  console.log("render item: " + item.title, " isfreeze:" + isFreezeBuy);

  useEffect(() => {
    setIsFreezeBuy(true);
    setIsShakingImg(true);
    setTimeout(() => {
      setIsFreezeBuy(false);
      setIsShakingImg(false);
    }, 500);
  }, [item.count]);

  return (
    <div className="item-card">
      <span className="item-card-title">{item.title}</span>
      <span className="item-card-count">
        {item.count ? `IN STOCK: ${item.count}` : "SOLD OUT"}
      </span>

      <img
        className="item-card-img"
        data-shake={isShakingImg}
        src={item.imgUrl}
        alt={item.imgAlt}
      />
      <span className="item-card-price">{item.price}₽</span>

      <button
        className="item-card-button"
        disabled={!isCanBuy}
        data-freeze={isFreezeBuy}
        onClick={() => onBuyItem(item)}
      />
    </div>
  );
};

export default ItemCard;
