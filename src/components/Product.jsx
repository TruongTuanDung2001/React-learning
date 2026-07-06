

//đây là cách truyền props thứ nhất
function Status(props){ 
    return <h3>Status: {props.status}</h3>
}

//đây là cách truyền props thứ 2
function Product({name, price}){ //Component luôn viết hoa chữ cái đầu
    return(
        <>
            <h3>Name product: {name}</h3>
            <span>Price: {price}</span>
        </>
    )
}

// export default Product;
export { Product, Status};