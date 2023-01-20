import { useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList/ItemList";
import Receiver from "./components/Receiver/Receiver";

function App() {
  const [cash, setCash] = useState(0);

  return (
    <div className="App">
      <ItemList cash={cash} setCash={setCash} />
      <Receiver cash={cash} setCash={setCash} />
    </div>
  );
}

export default App;
