import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  // const id = useParams(); // nó sẽ trả về { id: '...' , nếu muốn lấy ra thì dùng id.id} nên react dùng destructuring là cho const id thành const { id }
  /* nếu router là :<Route path="/users/:userId/posts/:postId" /> thì params sẽ là
    {
        userId: "15",
        postId: "8"
    }
        nếu nhiều hơn 1 giá trị mà sử dụng destructuring thì sẽ là:
        const { userId, postId } = useParams(); phải cùng name của bên router nha
        console.log(userId); // "15"
        console.log(postId); // "8"
    */
  const { id } = useParams();
  // console.log("detail page");
  //   console.log(id);
  // console.log(typeof id); string
  const API_URL = `http://localhost:3001/products`;
  const [dataProduct, setDataProduct] = useState(null); // vì lấy 1 sản phẩm nên nó là 1 object hoặc null cho cùng kiểu dữ liệu
  const [loading, setLoading] = useState(true);

  async function getProductById(id) {
    try {
      setLoading(true); // để khi đổi dữ liệu thì vẫn còn loading
      const response = await fetch(`${API_URL}/${id}`, {
        method: "GET",
      });
      if (!response.ok) throw new Error("Get data product fails");
      const data = await response.json();
      console.log(data);
      setDataProduct(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  // loading data local
  useEffect(() => {
    getProductById(id);
  }, [id]); // đặt là id vì nếu đang ở sp1 mà chuyển sang sp2 thì id thay đổi sẽ chạy lại getProductById(id);

  //return
  return (
    <div className="productDetail">
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <div>
          <h1>{dataProduct.name}</h1>
          <p>Category: {dataProduct.category}</p>
          <p>Price: {dataProduct.price}</p>
          <p>Stock: {dataProduct.stock}</p>
        </div>
      )}
    </div>
  );
}
