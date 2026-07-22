import { Product, Status } from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react"; //để sử dụng useState thay đổi và cập nhật dữ liệu trong react
// import {
//   Counter,
//   ChangeColor,
//   ShowHideBlock,
//   ChangeLike,
//   Exp5,
//   Exp6,
//   Exp7,
//   Exp8,
//   Exp9,
//   Exp10
// } from "./components/expReact1";
// import { Exp1, Exp2, Exp3, Exp4 } from "./components/ExpReact2";
import {
  Check,
  ConditionalRendering,
  LoadingData,
  ManagerUsers,
  ShowHideProduct,
  ShowProduct,
} from "./components/ConditionalRendering";

import { UseEffect, UseEffect2, UseEffect3 } from "./components/UseEffect";
import { AutoCounter, CharacterCounter, Clock, RandomQuote } from "./components/ExpUseEffect";
//
function App() {
  const [count, setCount] = useState(0); //setCount để thay đổi count lưu lại sau khi chạy increase()
  function increase() {
    setCount(count + 1);
    setCount(count + 1);
    // tại sao ở trên chạy 2 lần setCount mà count sau khi bấm nút vẫn tăng 1
    // tại vì setCount 1 lúc này sẽ lấy count đang lưu trong bộ nhớ react ban đầu là 0 nên 0 + 1 = 1 => setCount(1) chứ count chưa là 1
    // lần 2 setCount 2 lúc này chạy sau setCount 1 nhưng count lúc này vẫn là 0 tại vì setCount(1) là 1 chứ count chưa là 1, sau khi thay đổi giao cập nhật giao diện count mới tăng lên 1.
    // xử lý xong hàm đó thì mới đổi state

    // Hai lần setCount đều đọc cùng một giá trị count hiện tại.
    // React chưa cập nhật state ngay lập tức nên cả hai đều trở thành setCount(1).
  }

  function reduce() {
    setCount(count - 1);
  }

  return (
    <div>
      <Header />
      <h1>Danh sách sản phẩm</h1>
      <Product name="Iphone 13" price={13000000} />
      {/* cách truyền props:
          Có thể nhớ quy tắc này:
          "..." → truyền chuỗi.
          {...} → truyền biểu thức JavaScript.
          Ví dụ:
          <Product
              name="Iphone"
              price={2000}
              discount={10}
              inStock={true}
          />
        */}
      <Product name="MacBook Pro" price={3500} category="Laptop" />
      <Product name="Dell XPS" price={2200} />
      <Product name="Asus ROG" price={1800} />
      <Product name="Lenovo ThinkPad" price={1700} />
      <Status status="In Stock" />
      <Footer />

      <br />
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={increase}>+</button>
      <button onClick={reduce}>-</button>
    </div>
  );
}

function MapProduct() {
  //
  const products = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 3500,
      category: "Laptop",
    },
    {
      id: 2,
      name: "Dell XPS",
      price: 2200,
      category: "Laptop",
    },
    {
      id: 3,
      name: "Asus ROG",
      price: 1800,
      category: "Gaming",
    },
    {
      id: 4,
      name: "Lenovo ThinkPad",
      price: 1700,
      category: "Business",
    },
  ];
  return (
    //cái này là jsx nên mới có thể render ra giao diện bên ngoài, thấy có thẻ <></> hay <div><div/> bọc vô á, nếu kết quả 1 cái thì khỏi phải bọc
    <>
      {products.map(
        (
          product, //map trả về 1 mảng mới đầy đủ như mảng cũ, chỉ thay đổi giá trị từng phần tử.
        ) => (
          // Lưu ý: dùng dấu () là return luôn nên kh cần phải return nữa. nếu dùng {} thì =>{ return <Product .../> }
          <Product
            key={product.id} //key vì react kh biết phân biệt mỗi product nên cần key để phân loại, đưa thuộc tính id vào là được rồi
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ),
      )}
    </>
  );
}

function ExpReact1() {
  const colors = [
    {
      id: 1,
      color: "Red",
    },
    {
      id: 2,
      color: "Blue",
    },
    {
      id: 3,
      color: "Green",
    },
  ];
  const [bgColor, setBgColor] = useState("black");
  const blockStyle = {
    width: "100px",
    height: "100px",
    background: bgColor,
    margin: "20px 0px",
  };

  // show/hide content

  return (
    <div>
      {/* Couter */}
      <Counter />

      {/* Change color */}
      {/* 
            Hiện cái block bự màu đen ra trước
            Style cho cái block, để cái background là bgColor để thay đổi
            Hiện cái nút dựa trên colors[]
            Truyền tham số vào từng cái button là key, color, setBgColor
            * Mình cần click vào button là chạy cái setBgColor thì color mới thay đổi và react mới hiểu

        */}
      <div style={blockStyle}>
        {colors.map((color) => {
          return (
            <ChangeColor
              key={color.id}
              color={color.color}
              name={"name: " + color.color}
              setBgColor={setBgColor}
            />
          );
        })}
      </div>

      {/* change display */}
      <ShowHideBlock />

      {/* change like */}
      <ChangeLike />

      {/* exp 5 */}
      <Exp5 />

      {/* exp 6 */}
      <Exp6 />

      {/* exp 7 */}
      <Exp7 />

      {/* exp8 */}
      <Exp8 name="Dung" age="26" school="ABC" />
      <Exp8 name="Toidodaden" age="22" school="123" />
      <Exp8 name="Messi" age="30" school="999" />

      {/* exp 9 */}
      <Exp9 />

      {/* exp 10 */}
      <Exp10 />
    </div>
  );
}

// Exp 2
function ExpReact2() {
  return (
    <div className="exp2">
      <br /> <hr />
      <Exp1 /> <br /> <hr />
      <Exp2 /> <br /> <hr />
      <Exp3 /> <br /> <hr />
      <Exp4 /> <br /> <hr />
    </div>
  );
}

// Conditional Rendering
function Conditional() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);
  const [home, setHome] = useState(false);

  return (
    <div className="conditionalRendering">
      <button onClick={() => setLoading(!loading)}>
        {loading ? "Ngưng tải" : "Tải lại"}
      </button>
      <button onClick={() => setError(!error)}>
        {error ? "Đang bị lỗi" : "Không có lỗi"}
      </button>
      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
      <button onClick={() => setHome(!home)}>
        {home ? "Thoát trang chủ" : "Quay lại trang chủ"}
      </button>
      <hr /> <br />
      <ConditionalRendering
        key="1"
        loading={loading}
        login={login}
        error={error}
        home={home}
      />
      <hr /> <br />
      {/*  */}
      <Check />
      {/*  */}
      <ShowProduct />
      {/*  */}
      <LoadingData />
      {/*  */}
      <ShowHideProduct />
      {/*  */}
      <ManagerUsers />
    </div>
  );
}

// UseEffect
function Effect() {
  return (
    <div className="useEffect">
      <UseEffect />

      <UseEffect2 />

      <UseEffect3 />
    </div>
  );
}

//Exp useEffect
function ExpEffect(){
  return (
    <div>
      <Clock />

      <AutoCounter />

      <RandomQuote />

      <CharacterCounter />
    </div>
  )
}
//
export { App, MapProduct, ExpReact1, ExpReact2, Conditional, Effect, ExpEffect };
