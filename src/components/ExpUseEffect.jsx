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
  const [index, setIndex] = useState(null);
  // Lưu idex là vị trí nội dung mà content cần render ra, khi click thì index bằng với key của map thì xuất vị trí content[i]. Nếu như mà click item 1 rồi bấm qua item 2 thì setIdex hoạt động và map sẽ render lại 3 phần từ kiểm tra index === i nên cái nào thỏa điều kiện mới hiện content của item đó ra theo content[i]

  //
  return (
    <div>
      <h1>Accordion</h1>
      {title.map((item, i) => (
        <div
          key={i}
          onClick={() => (index === i ? setIndex(null) : setIndex(i))}
        >
          <p>{item} ⬇</p>
          {index === i && <span>{content[i]}</span>}
        </div>
      ))}
    </div>
  );
}

// exp7: Faq
function FAQ() {
  const questions = ["React là gì?", "useState dùng để làm gì?", "JSX là gì?"];

  const answers = [
    "React là thư viện JavaScript để xây dựng giao diện.",
    "useState dùng để lưu và cập nhật dữ liệu trong component.",
    "JSX là cách viết giao diện giống HTML bên trong JavaScript.",
  ];

  const [index, setIndex] = useState(null);
  return (
    <div>
      <h1>FAQ</h1>
      {questions.map((q, i) => (
        <div
          key={i}
          onClick={() => (index !== i ? setIndex(i) : setIndex(null))}
        >
          <p>{q}</p>
          {index === i && <span>{answers[i]}</span>}
        </div>
      ))}
    </div>
  );
}

// exp8: Tabs
function Tabs() {
  const tabs = ["Home", "About", "Contact"];
  const contents = [
    "Header - Main_content - Footer",
    "Page is show gi do gi do",
    "truongtuandung2001@gmail.com, 0965816822, toidodaden",
  ];
  const [index, setIndex] = useState(0);
  //
  const styleTabs = {
    display: "flex",
    gap: "20px",
    background: "#fff",
    cursor: "pointer",
  };
  const styleContentTab = {
    textAlign: "center",
    padding: "20px",
    border: "1px solid black",
  };
  const styleTabActive = {
    background: "red",
    color: "#fff",
  };
  //
  return (
    <div>
      <h1>Tabs</h1>
      <div className="tabs" style={styleTabs}>
        {tabs.map((t, i) => (
          // cái chỗ style quan trọng á: tại vì style cần = 1 object, nếu mình để index === && styleTabActive thì nếu nó true thì bth còn nếu nó false thì nó sẽ trả về rỗng không hợp với style nên sẽ gây lỗi, nêu dùng toán tử 3 ngôi và nếu false thì trả về {} object rỗng
          <p
            key={i}
            onClick={() => setIndex(i)}
            style={index === i ? styleTabActive : {}}
          >
            {t}
          </p>
        ))}
      </div>
      <div className="contentTab" style={styleContentTab}>
        {index != null && <span>{contents[index]}</span>}
      </div>
    </div>
  );
}

// exp9: product gallery (thumbnail)
function Gallery() {
  const listImage = [
    "https://i.pinimg.com/736x/c9/42/78/c94278cfc1a5d4e48b83281a17faf5ea.jpg",
    "https://i.pinimg.com/736x/06/b3/10/06b3108c13256f9147ab331fa2655369.jpg",
    "https://i.pinimg.com/736x/9f/0d/03/9f0d03fb4c3b6a159ef6b7d4dba54473.jpg",
    "https://i.pinimg.com/736x/05/86/6f/05866f8f1f98c6ea94286cd4308dd8f1.jpg",
  ];

  const [indexImage, setIndexImage] = useState(0);

  const styleImage = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  };
  const styleImageParent = {
    height: "80px",
    width: "60px",
  };

  const styleImageChildrent = {
    height: "50px",
    width: "30px",
    cursor: "pointer",
  };

  const styleSelect = {
    border: "2px solid red",
  };
  //
  return (
    <div className="gallery">
      <img style={styleImageParent} src={listImage[indexImage]} alt="" />
      <div style={styleImage} className="itemImage">
        {listImage.map((item, i) => (
          // tại sao phải dùng spread ... | vì style chỉ nhận vào 1 object nên mình dùng spread để nối 2 style object lại thành 1 object có thuộc tính cả 2, nếu cái sau có thuộc tính trùng cái trước thì lấy kết quả thuộc tính của cái sau
          <div key={i} onClick={() => setIndexImage(i)}>
            {indexImage !== i ? (
              <img style={styleImageChildrent} src={listImage[i]} alt="" />
            ) : (
              <img
                style={{ ...styleImageChildrent, ...styleSelect }}
                src={listImage[i]}
                alt=""
              />
            )}
          </div>
        ))}

        {/* xuất ra các phần tử trừ vị trí của indexImage, dùng () trong map và nó cần return 1 jsx nên mình cần div bọc các phần tử con */}
        {/* {listImage.map((item, i) => (
          <div key={i}>
            {indexImage !== i ? <img style={styleImageChildrent} src={listImage[i]} alt="" /> : ""}
          </div>
        ))} */}

        {/* như trên nhưng mình dùng {} trong map nên lúc này chưa có return, mình cần phải return trong điều kiện indexImage !== i */}
        {/* {listImage.map((item, i) => {
          return indexImage !== i ? <img style={styleImageChildrent} src={listImage[i]} alt="" /> : ""
        })} */}
      </div>
    </div>
  );
}
//
export {
  Clock,
  AutoCounter,
  RandomQuote,
  CharacterCounter,
  PasswordStrength,
  Accordion,
  FAQ,
  Tabs,
  Gallery,
};
