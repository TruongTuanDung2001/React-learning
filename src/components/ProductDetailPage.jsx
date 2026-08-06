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
  // console.log(id); là id
  // console.log(typeof id); string
  return <h1>This is product detail page</h1>;
}
