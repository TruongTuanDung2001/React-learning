import { useState } from "react";

// Conditional Rendering
function ConditionalRendering({ loading, error, login, home }) {
  return (
    <>
      {/* cách chuyền hàm và tham số theo kiểu JSX react js, dùng component */}
      <Login isLogin={login} />
      <Loading isLoading={loading} />
      <Error isError={error} />
      <Home isHome={home} />
    </>
    //nếu dùng {Login(login)} thì
    /**
         {Login(login)} thì Login({ isLogin }) bỏ 2 cái ngoặc {} ra, thành Login(isLogin )
         không nên dùng kiểu này
         */
  );
}
// Cách dùng if
function Login({ isLogin }) {
  if (isLogin) {
    return <h3>Chào mừng đăng nhập</h3>;
  }
  return <h3>Vui lòng đăng nhập</h3>;
}

function Loading({ isLoading }) {
  if (isLoading) {
    return <h3>Hệ thống đang tải dữ liệu</h3>;
  }
  return <h3>Tải dữ liệu bị gián đoạn</h3>;
}

function Error({ isError }) {
  if (isError) {
    return <h3>Hệ thống đang bị lỗi</h3>;
  }
  return <h3>Hệ thống ổn định</h3>;
}

function Home({ isHome }) {
  if (isHome) {
    return <h3>Bạn đang ở trang chủ</h3>;
  }
  return <h3>Quay lại trang chủ</h3>;
}

//toán tử 3 ngôi ? :
function Check() {
  const [isLogin, setLogin] = useState(false);
  const [text, setText] = useState("Login");
  function click() {
    isLogin === false
      ? (setLogin(true), setText("logout"))
      : (setLogin(false), setText("Login"));
  }
  return (
    <>
      <button onClick={click}>Check</button>
      <p>{text}</p>
    </>
  );
}

//
function ShowProduct() {
  const products = [
    { id: 1, name: "Nike" },
    { id: 2, name: "Puma" },
    { id: 3, name: "Adidas" },
  ];
  return (
    <div>
        {
          products.length > 0  ?  (products.map(p => (
            <p  key = {p.id}>{p.name}</p>
          ))) :  (<p>Không có sản phẩm</p>)
        }
    </div>
  );
}
export { ConditionalRendering, Check, ShowProduct };
