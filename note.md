Ghi chú React js của Dũng
Quy tắt đặt tên file:
trừ main.jsx thì chữ cái đầu không cần ghi hoa, còn các components còn lại thì nên ghi hoa chữ cái đầu
src/
│
├── assets/
├── components/
│      Header.jsx
│      Footer.jsx
│      ProductCard.jsx
│
├── pages/
│      Home.jsx
│      About.jsx
│
├── hooks/
│      useFetch.js
│
├── services/
│      api.js
│
├── utils/
│      formatPrice.js
│
├── App.jsx
└── main.jsx

Còn nữa
function Header(){
    return(
        <>
            <h3>Header</h3>
        </>
    )
}
cái này nếu chỉ có 1 cái thì có thể ghi tắt
function Header(){
    return <h3>Header</h3>
}

export và import
nếu export default thì chỉ được 1 cái
vd: export default Product; dù ở dưới có export thêm {...} bao nhiêu cũng kh được
có thể export trực tiếp khi khai báo function giông js
- nếu muốn export nhiều 1 lúc thì dùng export {component, ...};

import thì cũng v: import {component, ...} from './...';