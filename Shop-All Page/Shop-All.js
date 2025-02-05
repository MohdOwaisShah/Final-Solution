//click number to change products page

const switchPagesBtnContainer = document.querySelector(".switch-pages");
const productPage1 = document.querySelector(".shop-cards-container");
// const productPage2 = document.querySelector("#product-page-2");
const productPage2 = document.querySelector("#product-page-2");
const productPage3 = document.querySelector("#product-page-3");

let previouslyClickedButton = null;

// switching product page using button
const Btn1 = document.querySelector("#btn-1");
const Btn2 = document.querySelector("#btn-2");
const Btn3 = document.querySelector("#btn-3");

switchPagesBtnContainer.addEventListener("click", (btn) => {
    let targetId = btn.target.id;
    let btn1 = targetId == "btn-1";
    let btn2 = targetId == "btn-2";
    let btn3 = targetId == "btn-3";
    if (btn2) {
        productPage1.setAttribute('id', 'product-page-1')
        productPage2.removeAttribute('id')
        productPage3.setAttribute('id', 'product-page-3',)
        Btn2.style.border = "2px solid #A91D3A"
        Btn1.style.border = "2px solid transparent"
        Btn3.style.border = "2px solid transparent"
    }

    if (btn1) {
        productPage1.removeAttribute('id');
        productPage2.setAttribute('id', 'product-page-2',)
        productPage3.setAttribute('id', 'product-page-3',)
        Btn2.style.border = "2px solid transparent"
        Btn1.style.border = "2px solid #A91D3A"
        Btn3.style.border = "2px solid transparent"
    }

    if (btn3) {
        productPage3.removeAttribute('id');
        productPage1.setAttribute('id', 'product-page-1',)
        productPage2.setAttribute('id', 'product-page-2',)
        Btn2.style.border = "2px solid transparent"
        Btn1.style.border = "2px solid transparent"
        Btn3.style.border = "2px solid #A91D3A"
    }
})



// //switching pages using the right arrow
// const rigthArrow = document.querySelector("#rigth-side");


// let count = 0;
// rigthArrow.addEventListener("click", () => {
//     count++;
//     console.log(count);


//     if(count > 3){
//         count = 1;
//     }
//         if (count == 1) {
//             productPage1.setAttribute('id', 'product-page-1')
//             productPage2.removeAttribute('id')
//             productPage3.setAttribute('id', 'product-page-3',)
//             Btn2.style.border = "2px solid #A91D3A"
//             Btn1.style.border = "2px solid transparent"
//             Btn3.style.border = "2px solid transparent"
//         }
//         if (count == 2) {
//             productPage3.removeAttribute('id');
//             productPage1.setAttribute('id', 'product-page-1',)
//             productPage2.setAttribute('id', 'product-page-2',)
//             Btn2.style.border = "2px solid transparent"
//             Btn1.style.border = "2px solid transparent"
//             Btn3.style.border = "2px solid #A91D3A"
//             rigthArrow.style.visibility = "hidden";
//         }
//         else {
//             rigthArrow.style.visibility = "visible";
//         }

// })

// showing filter price
const filterBtn = document.querySelector("#filter");
filterBtn.addEventListener("click", () => {
    filterPrices.style.transform = "translateX(0.2em)"
    // console.log(filterPrices.value);
})

// filter price functionality
const filterPrices = document.querySelector("#filter-prices");//select element
const cards = document.querySelectorAll(".card")//node-list

filterPrices.addEventListener("change", () => {
    let filterVal = filterPrices.value;
    cards.forEach((card) => {
        let cardText = card.querySelector("h4");
        let cardPrice = parseInt(cardText.innerText.replace(/\D/g, ""));//removing Rs. from Rs.1000

        if (filterVal === "0 - 500") {
            cardPrice <= 500 ? card.style.display = "block" : card.style.display = "none";
        }
        else if (filterVal === "500 - 1k") {
            cardPrice >= 500 && cardPrice <= 1000 ? card.style.display = "block" : card.style.display = "none";
        }
        else if (filterVal === "1k - 10k") {
            cardPrice >= 1000 && cardPrice <= 10000 ? card.style.display = "block" : card.style.display = "none";
        }
        else {
            card.style.display = "block"
        }

    })
})


//display cart popup
const cartBtn = document.querySelectorAll(".products .card #cart-btn");
const popupsContainer = document.querySelector(".pop-up-container");

cartBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
        //selecting card
        e.preventDefault()
        let card = button.closest(".card");
        let productImageSrc = card.querySelector("img").src;

        popupsContainer.innerHTML = `<div class="pop-up">
        <img src="${productImageSrc}" alt="popup-thumbnail">
        <h3>Product Added!</h3>
        </div>`;
        const popup = document.querySelector(".pop-up");
        setTimeout(() => {
            popup.style.right = "1%";
        }, 0)
        setTimeout(() => {
            popup.style.right = "-45%";
        }, 3000)
    })
})


//click the cart icon to show the cart page

const cart = document.querySelector(".cart-container");
const cartPage = document.querySelector(".cart-page");
const cartCloseBtn = document.querySelector("#cart-close-icon");

cart.addEventListener("click", () => {
    cartPage.removeAttribute("id");
    document.body.style.overflow = "hidden";
})

cartCloseBtn.addEventListener("click", () => {
    cartPage.setAttribute("id", "cart-hide");
    document.body.style.overflow = "auto";
})


//showing numbers of products added on cart page
const cartNumber = document.querySelector("#cart-number");
const cartProducts = document.querySelectorAll(".cart-product");
let numberOfProducts = cartProducts.length;
cartNumber.innerText = numberOfProducts;

// //handling increment and decrement product quantity
// const incrementBtn = document.querySelectorAll(".increment");
// const decrementBtn = document.querySelectorAll(".decrement");
// let productPrices = [];

// incrementBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         let productId = e.target.getAttribute("id")//selecting product id
//         // Find the quantity element for this specific product using the product ID
//         const quantityOfProduct = document.querySelector(`.number-of-quantity[id="${productId}"]`);
//         const productOriginalPrice = document.querySelector(`.only-price[id="${productId}"]`);
//         const totalAmt = document.querySelector("#total-amount");
//         const billTotalMrp = document.querySelector("#total-mrp-price");
//         //selecting the quantity value and increasing it
//         let quantityValue = quantityOfProduct.innerText;
//         quantityValue++;
//         quantityOfProduct.innerText = quantityValue;

//         //calculate total cart increase price
//         const increamentProductPrice = Number(productOriginalPrice.innerText);

//         productPrices.push(increamentProductPrice);
//         const increaseTotalPrice = productPrices.reduce((accum, currVal) => {
//             return accum + currVal;
//         })
//         console.log(productPrices)

//         // display (totalPrice)   

//         totalAmt.innerText = increaseTotalPrice;
//         billTotalMrp.innerText = increaseTotalPrice;
//     })
// })
// // console.log(quantityValue)


// decrementBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {

//         // console.log(e.target.getAttribute("id"))
//         //selecting product id
//         let productId = e.target.getAttribute("id")

//         // Find the quantity element for this specific product using the product ID
//         const quantityOfProduct = document.querySelector(`.number-of-quantity[id="${productId}"]`);
//         //selecting the quantity value and increasing it
//         let quantityValue = quantityOfProduct.innerText;

//         if (quantityValue > 1) {
//             quantityValue--;
//             const productOriginalPrice = document.querySelector(`.only-price[id="${productId}"]`);
//         }

//         quantityOfProduct.innerText = quantityValue;
//     })
// })

cartProducts.forEach((product) => {
    console.log(product)
    const increment = product.querySelector(".increment")
    const decrement = product.querySelector(".decrement")
    const productQuantity = product.querySelector(".number-of-quantity")
    // let quantity = 1;

    increment.addEventListener(() => {
        let quantity = parseInt(productQuantity.value)
        quantity++

    })

    console.log(quantity)
})



// //calculate total cart product price
const productCartPrice = document.querySelectorAll(".only-price")
const billTotalMrp = document.querySelector("#total-mrp-price")
productCartPrice.forEach((currProPrice) => {
    productPrices.push(Number(currProPrice.innerText));//convert string to number

})
console.log(productPrices);

const totalPrice = productPrices.reduce((accum, currVal) => {
    return accum + currVal;
})
//display (totalPrice)
billTotalMrp.innerText = totalPrice;

//apply coupon
const applyBtn = document.querySelector("#apply-button");
const couponInputBox = document.querySelector("#coupon-input-box");
const totalAmt = document.querySelector("#total-amount");

totalAmt.innerText = totalPrice;

let tenPercent = totalPrice * 0.10; //10% discount
let discount = totalPrice - tenPercent;

applyBtn.addEventListener("click", () => {
    let couponInputValue = couponInputBox.value

    if (couponInputBox.value != "") {
        if (couponInputValue == "FS10" || couponInputValue == "fs10") {
            applyBtn.style.display = "none";
            totalAmt.innerText = discount;
        }
    }
})





// if cart numebr is 0 display empty page
const cartMainContainer = document.querySelector(".cart-main-container");
const cartEmptyPage = document.querySelector(".empty-cart-container");
if (cartNumber.innerText == 0) {
    cartEmptyPage.removeAttribute("id");
    cartMainContainer.setAttribute("id", "remove-empty-page");
}





