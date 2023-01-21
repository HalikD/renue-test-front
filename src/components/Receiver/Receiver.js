import { useState } from "react";
import { calculateRefund } from "../../utils/utils";
import { startReceiverBalance } from "../../resources/startReceiverBalance";
import "./Receiver.css";

const Receiver = ({ cash, setCash }) => {
  const [cashReceiver, setCashReceiver] = useState(startReceiverBalance);
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
      alert(
        "Извините, в автомате не осталось сдачи.\n" +
          "Вы можете докупить товаров на оставшуюся сумму.\n" +
          "В случае затруднений обратитесь в тех. поддержку по номеру XXX."
      );
      return;
    }
    setCash(0);
    setCashReceiver(updatedCashReceiver);
    alert(
      "Вы получили сдачу в следующих номиналах:\n" +
        Object.entries(coins)
          .filter(([_, count]) => count > 0)
          .map(([nominal, count]) => `${nominal}₽: ${count} ед.`)
          .join("\n")
    );
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
      <button
        disabled={!cash}
        className="receiver-button cancel-button"
        onClick={returnCash}
      >
        Get your money
      </button>
    </div>
  );
};

export default Receiver;
