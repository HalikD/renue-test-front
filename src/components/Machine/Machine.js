import { useState } from "react";
import { calculateMachineBalance } from "../../utils/utils";
import { startMachineBalance } from "../../resources/startMachineBalance";
import "./Machine.css";

const Machine = ({ userBalance, setUserBalance }) => {
  const [machineBalance, setMachineBalance] = useState(startMachineBalance);
  const moneyBills = [50, 100, 500, 1000];

  const addMoney = (value) => {
    const updatedMachineBalance = { ...machineBalance };
    updatedMachineBalance[value]++;
    setUserBalance(userBalance + value);
    setMachineBalance(updatedMachineBalance);
  };

  const returnMoney = () => {
    const [canGetChange, updatedMachineBalance, machineChange] =
      calculateMachineBalance(machineBalance, userBalance);

    if (!canGetChange) {
      alert(
        "Извините, в автомате не осталось сдачи.\n" +
          "Вы можете докупить товаров на оставшуюся сумму.\n" +
          "В случае затруднений обратитесь в тех. поддержку по номеру XXX."
      );
      return;
    }

    setUserBalance(0);
    setMachineBalance(updatedMachineBalance);
    alert(
      "Вы получили сдачу в следующих номиналах:\n" +
        Object.entries(machineChange)
          .filter(([_, count]) => count > 0)
          .map(([bill, count]) => `${bill}₽: ${count} ед.`)
          .join("\n")
    );
  };

  return (
    <div className="machine">
      <span className="machine-balance">{userBalance}₽</span>
      {moneyBills.map((value) => (
        <button
          key={value}
          className="machine-button"
          onClick={() => addMoney(value)}
        >
          +{value}
        </button>
      ))}
      <button
        disabled={!userBalance}
        className="machine-button machine-button-change"
        onClick={returnMoney}
      >
        Get your money
      </button>
    </div>
  );
};

export default Machine;
