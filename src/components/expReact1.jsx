import { useState } from "react";

//Counter
function Counter() {
  let [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  function reduce() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("Không được trừ nữa");
    }
  }

  function reset() {
    setCount((count = 0));
  }
  return (
    <div>
      <h3>Count: {count}</h3>
      <div className="actionsCount">
        <button onClick={reduce}>[ - ]</button>
        <button onClick={reset}>[ Reset ]</button>
        <button onClick={increase}>[ + ]</button>
      </div>
    </div>
  );
}

//Change color
function ChangeColor({ color, setBgColor }) {
  function actionColor() {
    // color là tên màu trong colors[] gán vào cái nút
    // setBgColor là cái màu của cái block bự đã có useState
    // setBgColor bằng màu button là cái block tự đổi màu
    setBgColor(color);
  }
  const bgButton = {
    background: color,
    margin: "10px",
  };
  return (
    <>
      <button style={bgButton} onClick={actionColor}>
        {color}
      </button>
    </>
  );
}

//Show/hide block
function ShowHideBlock() {
  const [statusDisplay, setStatusDisplay] = useState("block");
  const [text, setText] = useState("None Block");
  const exp3Style = {
    width: "50px",
    height: "50px",
    background: "brown",
    margin: "20px 0px",
    display: statusDisplay,
  };

  function changeStatus() {
    if (statusDisplay === "block") {
      setStatusDisplay("none");
      setText("Show block");
    } else {
      setStatusDisplay("block");
      setText("None Block");
    }
  }
  return (
    <div>
      <div className="block" style={exp3Style}></div>
      <button onClick={changeStatus}>{text}</button>
    </div>
  );
}

//Favorite
function ChangeLike() {
  const [like, setLike] = useState(0);
  function clickLike() {
    setLike(like + 1);
  }

  //
  let [resultClicked, setResultClicked] = useState(false);
  function clickedLike() {
    setResultClicked(!resultClicked);
  }

  return (
    <div className="list_like">
      <div className="likeBlock1">
        <h4>❤️ {like} likes</h4>
        <button onClick={clickLike}>Click</button>
      </div>

      <div
        className="likeBlock2"
        style={{
          height: "50px",
          width: "100px",
          background: "gray",
          marginTop: "20px",
        }}
        onClick={clickedLike}
      >
        {!resultClicked ? <h4>🤍 Like</h4> : <h4>❤️ Liked</h4>}
      </div>
    </div>
  );
}

//exp5 render list fruits
function Exp5() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
  const icons = {
    Apple: "🍎",
    Banana: "🍌",
    Orange: "🍊",
    Mango: "🥭",
    Kiwi: "🥝",
  };
  return (
    <div>
      {fruits.map((f) => (
        <p>
          {icons[f]} {f}
        </p>
      ))}
    </div>
  );
}

//exp6 render students
function Exp6() {
  const students = [
    {
      id: 1,
      name: "Nam",
      age: 20,
    },
    {
      id: 2,
      name: "Lan",
      age: 19,
    },
    {
      id: 3,
      name: "Minh",
      age: 22,
    },
  ];

  //
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        background: "brown",
        marginTop: "20px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {students.map((s) => (
        <div>
          <h4>Name: {s.name}</h4>
          <h4>Age: {s.age}</h4>
        </div>
      ))}
    </div>
  );
}

//exp7 render cart product
function Exp7() {
  const products = [
    {
      id: 1,
      name: "Nike Mercurial",
      price: 3200000,
      image: "https://...",
    },
    {
      id: 2,
      name: "Adidas Predator",
      price: 2800000,
      image: "https://...",
    },
  ];

  return (
    <div className="productList">
      <h1>Product cart</h1>
      {
        products.map(p => (
          <div className="productCart">
            <hr /> <br />
            <p>{p.name}</p> <br />
            <p>{p.price}</p> <br />
            <button>{"[ Buy ]"}</button>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

//exp8 render props
function Exp8({name, age, school}){
  return (
    <div className="student">
        <hr />
        <br />
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>School: {school}</p> <br />
    </div>
  )
}

export { Counter, ChangeColor, ShowHideBlock, ChangeLike, Exp5, Exp6, Exp7, Exp8 };
