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
      const response = await fetch(API);
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
        const response = await fetch(`${API}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });
        if (!response) throw new Error("Editing product Fails");
      }
      //create product
      else {
        const response = await fetch(`${API}`, {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.Stringify(productData),
        });
        if (!response) throw new Error("Create product fails");
      }

      // reset form and load again api product
      resetForm();
      getProducts();
    } catch (error) {
      throw new Error("Handle fails");
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
  }

  // delete product by id product
  async function handleDelete(id) {
    const isConfirmed = confirm("Do you want delete this product ?");

    if (!isConfirmed) return;

    // handle
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE"
      });

      if(!response) throw new Error("Delete product fails")
    } catch (error) {
      throw new Error("Handle fails");
    }
  }
}
