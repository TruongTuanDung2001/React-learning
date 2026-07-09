

//đây là cách truyền props thứ nhất
function Status(props){ 
    return <h3>Status: {props.status}</h3>

}

//đây là cách truyền props thứ 2
function Product({name, price, category = "khác"}){ //Component luôn viết hoa chữ cái đầu
    // console.log(category); nếu như không có giá trị hay giá trị = undefine thì react sẽ kh hiện ra, null và false cũng kh hiển thị luôn
    
    return(
        <>
            <h3>{name}</h3>
            <span>{price}$</span>
            <p>{category}</p>
        </>
    )
}

// export default Product;
export { Product, Status};