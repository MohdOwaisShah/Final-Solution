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







