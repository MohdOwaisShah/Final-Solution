// Initialize Swiper with autoplay, pagination, and navigation
//swiper js
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,  // Autoplay will continue after interacting with the slider
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Makes pagination bullets clickable
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Function to change slide based on thumbnail click
function changeSlide(index) {
    swiper.slideToLoop(index);  // Navigate to the specific slide using Swiper's slideToLoop method
}

// Add click event listeners to thumbnails
document.querySelectorAll('.thumbnails img').forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => changeSlide(index));
});



//incresment and decreament product quantity
const increamentBtn = document.querySelector("#increament");
const decreamentBtn = document.querySelector("#decreament");
const numberOfQuantity = document.querySelector("#number-of-quantity");
let count = 1;

increamentBtn.addEventListener("click", () => {
    count++;
    console.log("count is "+ count);
    numberOfQuantity.innerHTML=`${count}`
})

decreamentBtn.addEventListener("click", () => {
    if(count != 1){
    count--;
    console.log("count is "+ count);
    numberOfQuantity.innerHTML=`${count}`;
    }
})


//display review form
const giveReviewBtn = document.querySelector("#give-review");
const cancelBtn = document.querySelector("#review-cancel-btn");
const reviewForm = document.querySelector(".review-form");
//click to open form
giveReviewBtn.addEventListener("click", () => {
    reviewForm.classList.remove("hide-review-form")
    document.body.style.overflow="hidden"
})

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault()
    reviewForm.classList.add("hide-review-form")
    document.body.style.overflow="auto"
})

//display card cart popup
const cardCartBtn = document.querySelectorAll(".card #cart-btn");
const popupsContainer = document.querySelector(".pop-up-container");


cardCartBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
        //selecting parent
        e.preventDefault()
        let card = button.closest(".card");
        let productImageSrc = card.querySelector("img").src;
        console.log(productImageSrc);
        
        popupsContainer.innerHTML =`<div class="pop-up">
        <img src="${productImageSrc}" alt="popup-thumbnail">
        <h3>Product Added!</h3>
        </div>`;
        const popup = document.querySelector(".pop-up");
        setTimeout(() =>{
            popup.style.right="1%";
        },0)
        setTimeout(() =>{
            popup.style.right="-45%";
        },3000)
    })
})

// //display product page popup
const cartBtn = document.querySelectorAll("#add-to-cart-btn");

cartBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
        //selecting parent
        e.preventDefault()
        let parentContainer = button.closest(".product-section-1");
        let productImageSrc = parentContainer.querySelector("img").src;
        console.log(productImageSrc);
        
        popupsContainer.innerHTML =`<div class="pop-up">
        <img src="${productImageSrc}" alt="popup-thumbnail">
        <h3>Product Added!</h3>
        </div>`;
        const popup = document.querySelector(".pop-up");
        setTimeout(() =>{
            popup.style.right="1%";
        },0)
        setTimeout(() =>{
            popup.style.right="-45%";
        },3000)
    })
})


//click the cart icon to show the cart page