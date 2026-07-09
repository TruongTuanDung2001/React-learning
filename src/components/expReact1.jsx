import { useState } from "react";

//Counter
function Counter(){
    let [count, setCount] = useState(0);
    function increase(){
        setCount(count + 1)
    }

    function reduce(){
        if(count > 0){
            setCount(count - 1)
        }else{
            console.log('Không được trừ nữa');
            
        }
    }

    function reset(){
        setCount(count = 0)
    }
    return(
        <div>
            <h3>Count: {count}</h3>
            <div className="actionsCount">
                <button onClick={reduce}>[ - ]</button>
                <button onClick={reset}>[ Reset ]</button>
                <button onClick={increase}>[ + ]</button>
            </div>
        </div>
    )
}

//Change color
function ChangeColor({color, setBgColor}){
    function actionColor(){
        // color là tên màu trong colors[] gán vào cái nút
        // setBgColor là cái màu của cái block bự đã có useState
        // setBgColor bằng màu button là cái block tự đổi màu
        setBgColor(color)
    }
    const bgButton = {
        background: color,
        margin: "10px"
    }
    return (
        <>
            <button style={bgButton} onClick={actionColor}>{color}</button>
        </>
    )
}
export {Counter, ChangeColor};
