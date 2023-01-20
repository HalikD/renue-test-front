import { useState } from "react";
import { calculateRefund, moneyReceiver } from "../../utils";
import "./Receiver.css";

const Receiver = ({ cash, setCash }) => {
  const [cashReceiver, setCashReceiver] = useState(moneyReceiver);
  const cashNominals = [50, 100, 500, 1000];

  const addCash = (value) => {
    const updatedCashReceiver = { ...cashReceiver };
    updatedCashReceiver[value]++;
    setCash(cash + value);
    setCashReceiver(updatedCashReceiver);
  };

  const returnCash = () => {
    const [canRefund, updatedCashReceiver, coins] = calculateRefund(
      cashReceiver,
      cash
    );
    if (!canRefund) {
      alert("Извините, сдачи нет. Выберите товар на оставшуюся сумму");
      return;
    }
    setCash(0);
    setCashReceiver(updatedCashReceiver);
    console.log(coins);
    console.log(updatedCashReceiver);
  };

  return (
    <div className="receiver">
      <span className="receiver-balance">{cash}₽</span>
      {cashNominals.map((value) => (
        <button
          key={value}
          className="receiver-button"
          onClick={() => addCash(value)}
        >
          +{value}
        </button>
      ))}
      <button className="receiver-button cancel-button" onClick={returnCash}>
        Get your money
      </button>
    </div>
  );
};

export default Receiver;
