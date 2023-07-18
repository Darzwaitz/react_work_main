import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage>How did you like the service</SelectPercentage>
      <SelectPercentage>How dif your friend like the service</SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value="0">Dissatified (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output() {
  return <h3>You pay X ($A + $B tip)</h3>;
}
function Reset() {
  return <button>Reset</button>;
}

export default App;