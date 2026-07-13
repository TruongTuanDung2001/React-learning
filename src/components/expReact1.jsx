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
    width: "200px",
    height: "200px",
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
  let [resultClicked, setResultClicked] = useState(false)
  function clickedLike(){
        setResultClicked(!resultClicked)
  }

  return (
    <div className="list_like">
      <div className="likeBlock1">
        <h4>❤️ {like} likes</h4>
        <button onClick={clickLike}>Click</button>
      </div>

      <div className="likeBlock2" style={{ height: "50px", width: "100px", background: "gray", marginTop: "20px" }} onClick={clickedLike}>
        {!resultClicked ? 
        (
            <h4>🤍 Like</h4>
        ):
        (
            <h4>❤️ Liked</h4>
        )}
        
      </div>
    </div>
  );
}

export { Counter, ChangeColor, ShowHideBlock, ChangeLike };
