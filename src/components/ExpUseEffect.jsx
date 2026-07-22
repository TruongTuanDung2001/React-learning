//
import { useEffect, useState } from "react";

// exp1: đồng hồ
function Clock() {
    const [time, setTime] = useState(new Date());
  //
  useEffect(() => {
    function updateTime(){
        const now = new Date();
        setTime(now);
    }
    //sau 1 giây thì chạy và thay đổi giờ
    const timer = setInterval(updateTime, 1000); // coi chừng sai cú pháp
    //Clearup: khi component unmount thì xóa interval, để tránh nó chạy ngầm tốn tài nguyên. Vì dùng [] không có dữ liệu nên khi nào unmount thì mới chạy clear thôi.
    return () => {
      clearInterval(timer);
      console.log("Đã clear timer");
    };
  }, []);
  //
  return (
    <div>
      <h1>
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </h1>
    </div>
  );
}

// exp2: auto counter
function AutoCounter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  //
  useEffect(() => {
    let counter;
    if (isRunning) {
      counter = setInterval(() => {
        setCount(pre => pre + 1);
      }, 1000);
    }

    return () => {
      //vì sao lại trả return về như v mà kh phải return {...<div>...} vì đó là return kiểu jsx để render ra component, còn mình cần trong hàm useEffect là 1 callback function để gọi khi unmount hay chạy lại effect
      clearInterval(counter);
    };
  }, [isRunning] );
  //

  return (
    <div>
        <h1>Count: {count}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => (setCount(0), setIsRunning(false))}>Reset</button>
    </div>
  );
}

//
export { Clock, AutoCounter };
