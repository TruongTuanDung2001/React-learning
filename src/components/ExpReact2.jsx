import { useState } from "react"

// exp1 máy tính cộng trừ
function Exp1(){
    const [count, setCount] = useState(0);
    const [result, setResult] = useState('');

    function increaseCount(){
        const newCount = count + 1;
        setCount(newCount)
        console.log(count);
        if(newCount > 10) setResult('Too high')
        else setResult('')
    }

    function reduceCount(){
        const newCount = count - 1;
        setCount(newCount)
        if(newCount < 0) setResult('Too low')
        else setResult('')
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
    )
}

export {Exp1}