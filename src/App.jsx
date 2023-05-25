import React, { useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList/ItemList";
import Machine from "./components/Machine/Machine";

function App() {
  const [userBalance, setUserBalance] = useState(0);

  return (
    <div className="App">
      <ItemList userBalance={userBalance} setUserBalance={setUserBalance} />
      <Machine userBalance={userBalance} setUserBalance={setUserBalance} />
    </div>
  );
}

export default App;
