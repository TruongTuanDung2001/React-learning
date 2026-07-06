function Product(){ //Component luôn viết hoa chữ cái đầu
    return(
        <>
            <h3>Iphone 13</h3>
            <span>Price: 13.000.000đ</span>
        </>
    )
}

function Status(){
    return <h3>In Stock</h3>
}

// export default Product;
export { Product, Status};