import { useState } from "react";

// exp1 máy tính cộng trừ
function Exp1() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("");

  function increaseCount() {
    const newCount = count + 1;
    setCount(newCount);
    console.log(count);
    if (newCount > 10) setResult("Too high");
    else setResult("");
  }

  function reduceCount() {
    const newCount = count - 1;
    setCount(newCount);
    if (newCount < 0) setResult("Too low");
    else setResult("");
  }

  return (
    <>
      <button onClick={increaseCount}>+</button>
      <button onClick={reduceCount}>-</button>
      <div>
        <p>Result {count}</p>
        <p>{result}</p>
      </div>
    </>
  );
}

// exp2 front size văn bản
function Exp2() {
  const [fontSize, setFontSize] = useState(12);
  let styleExp2 = {
    fontSize: fontSize,
    background: "red",
  };
  let [warning, setWarning] = useState("");

  function increaseFontSize() {
    let newE = fontSize + 1; //19 + 1 = 20 | 
    if(newE <= 20) setFontSize(newE);
    if (newE > 20) setWarning("Không được lớn hơn 20");
    else setWarning("");
  }

  function reduceFontSize() {
    let newE = fontSize - 1; // 12 - 1 = 11 
    if(newE >= 12) setFontSize(newE);
    if (newE < 12) setWarning("Không được nhỏ hơn 12");
    else setWarning("");
  }

  return (
    <div className="exp2" style={styleExp2}>
      <h1>Exp 2</h1>
      <button onClick={increaseFontSize}>A+</button>
      <button onClick={reduceFontSize}>A-</button>
      <h3>Font size: {styleExp2.fontSize}</h3>
      <div className="resultExp2">
        <p className="text">Hello World !!!</p>
        <p className="warning">{warning}</p>
      </div>
    </div>
  );
}

export { Exp1, Exp2 };
