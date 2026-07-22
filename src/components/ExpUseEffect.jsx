//
import { useEffect, useState } from "react";

//exp 1: đồng hồ
function Clock() {
  const [hours, setHours] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();
  //
  useEffect(() => {
    //hiển thị dữ liệu khi lần đầu mount
    const now = new Date();
    setHours(now.getHours());
    setMinute(now.getMinutes());
    setSecond(now.getSeconds());
    //sau 1 giây thì chạy và thay đổi giờ
    const timer = setInterval(() => {
      const currentTime = new Date();
      setHours(currentTime.getHours());
      setMinute(currentTime.getMinutes());
      setSecond(currentTime.getSeconds());
    }, 1000);
    //Clearup: khi component unmount thì xóa interval, để tránh nó chạy ngầm tốn tài nguyên. Khi giá trị thay đổi thì hàm clearup chạy để xóa cái interval cũ
    return () => {
      clearInterval(timer);
      console.log("Đã clear timer");
    };
  }, []);
  //
  return (
    <div>
      <h1>
        {hours}:{minute}:{second}
      </h1>
    </div>
  );
}

export { Clock };
