import {Product, Status} from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(){
  return (
    <div>
      <Header />

      <h1>Danh sách sản phẩm</h1>
      <Product />
      <Product />
      <Product />

      <Footer />
    </div>
  )
}

export default App
