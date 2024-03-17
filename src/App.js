import "./App.css";
import { useState } from "react";
import { Side2 } from "./Side2";

function App() {
  return <TipCalc />;
}

function TipCalc() {
  const [billAmount, setBillAmount] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const total = (billAmount * (1 + tipPercentage / 100)) / numberOfPeople;
  const tipAmount = (billAmount * tipPercentage) / 100 / numberOfPeople;

  function handleNumberOfPeopleChange(e) {
    setNumberOfPeople(e.target.value);
  }

  function handleBillAmountChange(e) {
    setBillAmount(e.target.value);
  }

  function handleTipPercentageChange(value) {
    setTipPercentage(value);
  }
  function resetCalculator() {
    setBillAmount("");
    setNumberOfPeople("");
    setTipPercentage("");
  }

  return (
    <div className="root">
      <div className="box">
        <Side1
          billAmount={billAmount}
          onHandleBillAmount={handleBillAmountChange}
          onHandlePeople={handleNumberOfPeopleChange}
          numberOfPeople={numberOfPeople}
          tipPercentage={tipPercentage}
          onHandleTipPercentage={handleTipPercentageChange}
        />
        <Side2
          total={total}
          tipAmount={tipAmount}
          resetCalculator={resetCalculator}
        />
      </div>
    </div>
  );
}

function Side1({
  billAmount,
  onHandleBillAmount,
  onHandlePeople,
  numberOfPeople,
  tipPercentage,
  onHandleTipPercentage,
}) {
  return (
    <div className="side__1">
      <Bill billAmount={billAmount} onHandleBillAmount={onHandleBillAmount} />
      <TipPercentage
        tipPercentage={tipPercentage}
        onHandleTipPercentage={onHandleTipPercentage}
      />
      <NumberOfPeopleInput
        numberOfPeople={numberOfPeople}
        onHandlePeople={onHandlePeople}
      />
    </div>
  );
}

function Bill({ billAmount, onHandleBillAmount }) {
  return (
    <>
      <div className="side__1-text">bill</div>
      <input
        type="number"
        id="billAmount"
        placeholder="0.0"
        className="side__1__bill"
        value={billAmount}
        onChange={onHandleBillAmount}
      />
    </>
  );
}

function TipPercentage({ tipPercentage, onHandleTipPercentage }) {
  return (
    <>
      <div className="side__1-text">Select Tip %</div>
      <div className="side__1__percentage">
        {[5, 10, 15, 25, 50].map((percentage) => (
          <Button
            key={percentage}
            tipPercentage={tipPercentage}
            onHandleTipPercentage={onHandleTipPercentage}
            value={percentage}
          />
        ))}
        <CustomTip
          tipPercentage={tipPercentage}
          onHandleTipPercentage={onHandleTipPercentage}
        />
      </div>
    </>
  );
}

function CustomTip({ tipPercentage, onHandleTipPercentage }) {
  return (
    <>
      <input
        id="Custom"
        placeholder="Custom"
        className="side__1__percentage-2"
        value={tipPercentage}
        onChange={(e) => onHandleTipPercentage(e.target.value)}
      />
    </>
  );
}

function Button({ children, value, onHandleTipPercentage }) {
  const handleClick = () => {
    onHandleTipPercentage(value);
  };

  return (
    <button onClick={handleClick} className="side__1__percentage-1">
      {value}%
    </button>
  );
}

function NumberOfPeopleInput({ onHandlePeople, numberOfPeople }) {
  return (
    <>
      <div className="side__1-text">Number of People</div>
      <input
        type="number"
        id="numberPll"
        placeholder="0"
        className="side__1__bill"
        value={numberOfPeople}
        onChange={onHandlePeople}
      />
    </>
  );
}
export default App;
