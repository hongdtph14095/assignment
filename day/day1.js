const menuList = ["menu1", "menu2", "menu3"];
const menuElement = document.querySelector("#menu");

if (menuElement) {
    //for
    // for (let i = 0; index < menuList.length; i++) {
    //    menuElement.innerHTML += '<li>${menuList[i]}</li>'; 
    // }
    //for in
    // for (let i in menuList) {
    //     menuElement.innerHTML += '<li>${menuList[i]}</li>';
    // }
    // for off ket hop giua fpr in vaf for each
    // menuList.forEach(function (menuItem, index) {
    //     menuElement.innerHTML +='<li>${menuItem+ index}</li>' ;
    // });
    // map
    const result = menuList
    .map(function (menuItem, index) {
        return '<li>${menuItem}</li>';
    })
    .join("");
menuElement.innerHTML = result;
}
// ===============

const productElement = document.querySelector("#products");
if (productElement) {
    const resul = productList
    .map(function (productItem, index) {
        return '<div>${productItem.name}</div>';
    })
    .join("");
    productElement.innerHTML = resul;
}
console.log(numberA);
console.log("sum",sum(3,4));
//K cần khai báo biến vẫn hiển thị
console.log("sum", sum(3, 4))
function sum(a, b) {
    return a + b;
}

// function expression(Bắt buộc phải kha báo biến)
const sum2 = function (a, b) {
    return a + b;
};
console.log("function expression", sum2(3, 4));

//  arrow function : viet tat function expression
const sum3 = (a, b) => a + b;
console.log("arrow function", sum3(3, 4));

