export const calculateRefund = (cashReceiver, cash) => {
  const updatedCashReceiver = { ...cashReceiver };
  const nominals = [500, 100, 50, 10, 5, 1];
  const coins = nominals.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});
  while (cash > 0) {
    for (let cost of nominals) {
      if (cash >= cost && updatedCashReceiver[cost]) {
        cash -= cost;
        updatedCashReceiver[cost]--;
        coins[cost]++;
        break;
      } else if (cost === 1) {
        return [false, updatedCashReceiver, coins];
      }
    }
  }
  return [true, updatedCashReceiver, coins];
};
