import {Product, Status} from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(){
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
      <Status status = "In stock" />
      <Product />
      <Product />

      <Footer />
    </div>
  )
}

export default App
