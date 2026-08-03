import { useState, useEffect } from "react";

//
const API_URL = "http://localhost:3001/products";

export default function ProductsCRUD() {
  const [products, setProducts] = useState([]);
  //
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  //
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  // lấy danh sách products
  async function getProducts() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("No data products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  // chạy api products
  useEffect(() => {
    getProducts();
  }, []);

  //reset form
  function resetForm() {
    setName("");
    setPrice(0);
    setCategory("");
    setStock(0);
    setImage("");
    setDescription("");
    // phải có để cancel nút edit để nó trở về trạng thái create
    setEditingId(null);
  }

  // Tạo hoặc cập nhật products
  async function handleSubmit(e) {
    e.preventDefault();
    const productData = {
      name,
      price: Number(price),
      category,
      stock: Number(stock),
      image,
      description,
    };

    //
    try {
      //edit product
      if (editingId) {
        const response = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });
        if (!response.ok) throw new Error("Editing product Fails");
      }
      //create product
      else {
        const response = await fetch(`${API_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });
        if (!response.ok) throw new Error("Create product fails");
      }

      // reset form and load again api product
      resetForm();
      getProducts();
    } catch (error) {
      throw new Error("Handle fails :" + error);
    }
  }

  // get data product in form
  function handleEdit(product) {
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
    setStock(product.stock);
    setImage(product.image);
    setDescription(product.description);
    // phải có nha để phân biệt nếu có editingId thì là edit không là create
    setEditingId(product.id);
  }

  // delete product by id product
  async function handleDelete(id) {
    const isConfirmed = confirm("Do you want delete this product ?");

    if (!isConfirmed) return;

    // handle
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Delete product fails");
    } catch (error) {
      throw new Error("Handle fails");
    }
  }

  // return jsx
  return (
    <div>
      <h1>Manager Products</h1>

      <form action="" onSubmit={handleSubmit}>
        {/* giá trị input là name và khi thay đổi thì setName, có value rồi thì có thể làm CRUD */}
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* button submit */}
        <button type="submit">
          {editingId ? "Editing product" : "Create product"}
        </button>
        {editingId && (
          <button type="button" onClick={resetForm}>
            Cancel editing
          </button>
        )}
      </form>
      <hr /> <br />

      {/* xuất danh sách products */}
      {loading ? (
        <p>Loading ...</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <b>{product.name} - {product.price}</b>
            <b>{product.category} - {product.stock}</b>
            <b>{product.image} - {product.description}</b>
            <hr />
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <hr /> <br />
          </div>
        ))
      )}
    </div>
  );
}
