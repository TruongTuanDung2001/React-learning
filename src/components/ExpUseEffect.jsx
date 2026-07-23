//
import { useEffect, useState } from "react";

// exp1: đồng hồ
function Clock() {
  const [time, setTime] = useState(new Date());
  //
  useEffect(() => {
    function updateTime() {
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
        setCount((pre) => pre + 1);
      }, 1000);
    }

    return () => {
      //vì sao lại trả return về như v mà kh phải return {...<div>...} vì đó là return kiểu jsx để render ra component, còn mình cần trong hàm useEffect là 1 callback function để gọi khi unmount hay chạy lại effect
      clearInterval(counter);
    };
  }, [isRunning]);
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

// exp3: random quote
function RandomQuote() {
  const quotes = [
    "Never give up",
    "React is awesome",
    "Practice makes perfect",
    "Stay hungry",
  ];
  const [text, setText] = useState("");
  function random() {
    const item = quotes[Math.floor(Math.random() * quotes.length)];
    setText(item);
  }
  return (
    <div>
      <p>Text: {text}</p>
      <button onClick={random}>Random</button>
    </div>
  );
}

// exp4: character counter
function CharacterCounter() {
  //giá trị của text trong textarea
  const [text, setText] = useState("");
  function reset() {
    setText("");
  }
  return (
    <div>
      {/* nên dùng value = {text} nha */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p>Hiển thị: {text.length} ký tự</p>
      {/* lý do vì sao nên dùng value = {text} nè */}
      <button onClick={reset}>Reset text</button>
      {/* nếu như mà không có value = {text} thì chỗ text.length sẽ cập nhật lại = 0, còn nội dung trong bảng textarea thì vẫn giữ nguyên */}
      {/* nếu dùng value={text} thì nếu bấm reset thì text cập nhật lại cả length và nội dung đã ghi trong textarea thành rỗng lun. Hiều hemmm */}
    </div>
  );
}

// exp5: password strength
function PasswordStrength() {
  const [text, setText] = useState("");
  const [strength, setStrength] = useState("");

  function handleChange(e) {
    const input = e.target.value;
    setText(input);

    const hasNumber = /\d/.test(input); //đúng là true
    const hasLetter = /[a-zA-ZÀ-ỹ]/.test(input);
    const hasSpecial = /[^a-zA-Z0-9À-ỹ\s]/.test(input);

    if (input.length === 0) {
      //trả về ban đầu;
      setStrength("");
    } else if (input.length >= 6 && hasNumber && hasLetter && hasSpecial) {
      //kiểm tra nếu có 3 cái trước
      setStrength("Strong");
    } else if (input.length >= 6 && hasNumber && hasLetter) {
      //xong tới 2 cái số và chữ
      setStrength("Medium");
    } else {
      // cái còn lại, có thể là chứ hoặc số với ký tự đặt biệt, set nó là weak
      setStrength("Weak");
    }
  }
  return (
    <div>
      <h5>Check password</h5>
      <input type="password" value={text} onChange={handleChange} />
      <p>Password is: {strength}</p>
    </div>
  );
}

// exp6: accordion
function Accordion() {
  const title = ["React", "Javascript", "HTML-CSS"];
  const content = [
    "React là thư viện của Javascript để xây dựng giao diện",
    "Javascript là ngôn ngữ cơ bản để lập trình website",
    "HTML-CSS là ngôn ngữ dùng để làm giao diện website",
  ];
  const [index, setIndex] = useState(null)
  // Lưu idex là vị trí nội dung mà content cần render ra, khi click thì index bằng với key của map thì xuất vị trí content[i]. Nếu như mà click item 1 rồi bấm qua item 2 thì setIdex hoạt động và map sẽ render lại 3 phần từ kiểm tra index === i nên cái nào thỏa điều kiện mới hiện content của item đó ra theo content[i]

  //
  return (
    <div>
      <h1>Accordion</h1>
      {title.map((item, i) => (
        <div key={i} onClick={() => setIndex(i)}>
          <p>{item} ⬇</p>
          {index === i && <span>{content[i]}</span>}
        </div>
      ))}
    </div>
  )

}

//
export { Clock, AutoCounter, RandomQuote, CharacterCounter, PasswordStrength, Accordion };
