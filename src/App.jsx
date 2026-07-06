import {Product, Status} from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react"; //để sử dụng useState thay đổi và cập nhật dữ liệu trong react

function App(){
  const [count, setCount] = useState(0); //setCount để thay đổi count lưu lại sau khi chạy increase()
  function increase(){
    setCount(count + 1)
    setCount(count + 1)
    // tại sao ở trên chạy 2 lần setCount mà count sau khi bấm nút vẫn tăng 1
    // tại vì setCount 1 lúc này sẽ lấy count đang lưu trong bộ nhớ react ban đầu là 0 nên 0 + 1 = 1 => setCount(1) chứ count chưa là 1
    // lần 2 setCount 2 lúc này chạy sau setCount 1 nhưng count lúc này vẫn là 0 tại vì setCount(1) là 1 chứ count chưa là 1, sau khi thay đổi giao cập nhật giao diện count mới tăng lên 1.
    // xử lý xong hàm đó thì mới đổi state

    // Hai lần setCount đều đọc cùng một giá trị count hiện tại.
    // React chưa cập nhật state ngay lập tức nên cả hai đều trở thành setCount(1).
  }

  function reduce(){
    setCount(count - 1)
  }

  return (
    <div>
      <Header />
      <h1>Danh sách sản phẩm</h1>
      <Product 
        name = "Iphone 13"
        price = {13000000} /> 
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
        <Product
          name = "MacBook Pro"
          price = {3500}  
          category = "Laptop"
        />
        <Product
          name = "Dell XPS"
          price = {2200}  
        />
        <Product
          name = "Asus ROG"
          price = {1800}  
        />
        <Product
          name = "Lenovo ThinkPad"
          price = {1700}  
        />
        <Status 
          status = "In Stock"
        />
      <Footer />

      <br />
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={increase}>+</button>
      <button onClick={reduce}>-</button>
    </div>
  )
}

export default App
