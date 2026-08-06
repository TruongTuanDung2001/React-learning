import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const navigate = useNavigate();
  function handleCreateProduct() {
    //xử lý khi người dùng thực hiện hành động hoặc 1 logic
    alert("Create product success");
    navigate("/products");
  }

  function backPage() {
    navigate(-1); // -1 là quay về trang trước khi đến, -2 là quay về 2 trang trước nha
    /*
        navigate("/dashboard", {
            replace: true //dùng để thay thế lịch sử
        });
        nếu kh có replace: home -> login(true) -> dashboard || back => login
        nếu có replace: home -> login(true) -> dashboard || back => home
    */
  }
  return (
    <div>
      <button onClick={handleCreateProduct}>Create Product</button>
      <button onClick={backPage}>Back page</button>
    </div>
  );
}
