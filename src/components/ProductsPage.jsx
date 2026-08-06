import { Link } from "react-router-dom";

//
export default function ProductsPage() {
  const arrProducts = [
    {
      id: "p1",
      name: "Áo thun basic",
      price: 199000,
      category: "Thời trang",
      stock: 25,
      image: "https://picsum.photos/seed/tshirt/300/300",
      description: "Áo thun cotton mềm, form unisex.",
    },
    {
      id: "p2",
      name: "Giày sneaker trắng",
      price: 599000,
      category: "Giày dép",
      stock: 12,
      image: "https://picsum.photos/seed/sneaker/300/300",
      description: "Giày sneaker phong cách tối giản.",
    },
    {
      id: "p3",
      name: "Balo laptop",
      price: 459000,
      category: "Phụ kiện",
      stock: 18,
      image: "https://picsum.photos/seed/backpack/300/300",
      description: "Balo chống sốc, phù hợp laptop 15.6 inch.",
    },
  ];

  //
  return (
    <div className="products">
        <h1>This is products page</h1> <br />
        {arrProducts.map(product => (
            <div className="item-product" key={product.id}>
                <hr /> <br />
                <b>Name: {product.name} | </b>
                <b>Price: {product.price} | </b>
                <b>Category: {product.category} | </b>
                <b>Stock: {product.stock}</b>
                <Link to={`/products/${product.id}`}>Detail product</Link>
                <br /> <br />
            </div>
        ))}
    </div>
  )
}
