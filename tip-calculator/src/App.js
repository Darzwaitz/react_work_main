import "./App.css";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How did you like the service</SelectPercentage>
      <SelectPercentage>How dif your friend like the service</SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}
function BillInput() {
  return (
    <div>
      <label>How much was the bill</label>
      <input type="text" placeholder="Bill Value" />
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
  return <h1>shtart</h1>;
}
function Reset() {
  return <h1>shtart</h1>;
}

export default App;
