import { useEffect, useState } from "react";

//use effect dùng để làm 1 việc khi component được render hoặc khi dữ liệu thay đổi

// cấu trúc cơ bản, có thể có [] và không có [], hoặc gán [] là các useState
// useEffect(() => {
//     //code muốn chạy
// }, [])

// th1: có dấu [], chỉ chạy 1 lần duy nhất khi component được khởi tạo, trang mở -> react render -> useEffect chạy
function UseEffect(){
    useEffect(() => {
        console.log("Component đã render lần đầu");
    }, [])
    return <><h1>Hello React JS !!!</h1></>
}

// th2: không có dấu [], thì mối lần component bất kỳ đổi thì nó sẽ chạy
function UseEffect2(){
    useEffect(() => {
        console.log("Render");
    },)

    const [count, setCount] = useState(0)
    return (<>
        <button onClick={() => setCount(count + 1)}>{count}</button>
    </>)
}

// th3, có dữ liệu bên trong [], nó chỉ chạy khi dependency có count thay đổi thì nó chạy, nếu thay đổi text thì cũng không chạy, nếu muốn chạy nhiều thì thêm vào [count, text]
function UseEffect3(){
    const [count, setCount]  = useState(0);
    const [text, setText] = useState("Name");
    useEffect(() => {
        console.log("Render count, text");
    }, [count, text]);

    return (<>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <button onClick={() => setText(text + count)}>{text}</button>
    </>)
}


//
export {UseEffect, UseEffect2, UseEffect3}