import { useState } from "react";

function Calc() {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const [add, setAdd] = useState(null);
  const addition = () => {
    setAdd(firstInput + secondInput);
  };
  return (
    <div>
      <input
        type="number"
        onChange={setFirstInput(firstInput)}
        placeholder="First Number"
      />
      <input
        type="number"
        onChange={setSecondInput(secondInput)}
        placeholder="Second Number"
      />
      <button onClick={addition}> ADD </button>
      <h1> {add} </h1>
    </div>
  );
}

export default Calc;
