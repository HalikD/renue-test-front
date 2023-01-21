export const calculateMachineBalance = (machineBalance, userBalance) => {
  const updatedMachineBalance = { ...machineBalance };
  const bills = [500, 100, 50, 10, 5, 1];
  const machineChange = bills.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});
  while (userBalance > 0) {
    for (let cost of bills) {
      if (userBalance >= cost && updatedMachineBalance[cost]) {
        userBalance -= cost;
        updatedMachineBalance[cost]--;
        machineChange[cost]++;
        break;
      } else if (cost === 1) {
        return [false, updatedMachineBalance, machineChange];
      }
    }
  }
  return [true, updatedMachineBalance, machineChange];
};
