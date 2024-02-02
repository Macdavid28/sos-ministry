import { useState } from "react";

function Calc() {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const [add, setAdd] = useState(null);

  const handleFirstInputChange = (event) => {
    setFirstInput(event.target.value);
  };

  const handleSecondInputChange = (event) => {
    setSecondInput(event.target.value);
  };

  const addition = () => {
    setAdd(Number(firstInput) + Number(secondInput));
  };

  return (
    <div>
      <input
        type="number"
        value={firstInput}
        onChange={handleFirstInputChange}
        placeholder="First Number"
      />
      <input
        type="number"
        value={secondInput}
        onChange={handleSecondInputChange}
        placeholder="Second Number"
      />
      <button onClick={addition}>Add</button>
      {add !== null && <p>Result: {add}</p>}
    </div>
  );
}

export default Calc;
