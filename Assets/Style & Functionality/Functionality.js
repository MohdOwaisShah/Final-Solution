let searchIcon = document.querySelector("#search");
let sMainBody = document.querySelector(".search-body");
let closebtn = document.querySelector("#close");
//functionality to clicking search & closing

//scroll to change navigation style
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 5) {
        navbar.style.filter = "drop-shadow(0px 0px 4px #1515159b)";
    } else {
        navbar.style.filter = "none";
    }

})

//showing search-body
searchIcon.addEventListener("click", () => {
    sMainBody.style.transform = "translateY(0%)"
    document.querySelector("#search-input").focus();
    document.body.style.overflow = "hidden";

});

//close search-body
closebtn.addEventListener("click", () => {
    sMainBody.style.transform = "translateY(-100%)"
    document.body.style.overflow = "auto";

})

//product searching functionality
const searchBar = document.querySelector("#search-input");
// const productName = document.querySelectorAll(".search-product-details h3");
const searchProductContainer = document.querySelectorAll(".search-products-link");
const searchProducts = document.querySelector("search-products");

searchBar.addEventListener("input", (e) => {
    let userValue = e.target.value.toLowerCase();

    searchProductContainer.forEach((product) => {
        const productName = product.querySelector(".search-product-details h3").innerText.toLowerCase();
        if (productName.includes(userValue)) {
            product.classList.remove("hide");
        } else {
            product.classList.add("hide");
        }

    })
})




//click to open all products drop down menu
const dropDownMainEle = document.querySelector("#responsive-mobile-accessories");
const navigation = document.querySelector(".navigation");
const listOfaccessories = document.querySelector(".navigation .list-of-accessories");
const mobileAccessoriesMainContainer = document.querySelector(".mobile-accessories-main-container");
const marginTopMobileAccessories = document.querySelector(".margin-top-mobile-accessories");
isShow = true;

dropDownMainEle.addEventListener("click", () => {
    if (isShow) {
        // listOfaccessories.style.cssText = "display: block;"
        listOfaccessories.style.cssText = "visibility: visible; opacity: 1;display: block;"
        navigation.style.gap = "36px";
        mobileAccessoriesMainContainer.setAttribute("class","margin-top-mobile-accessories");
        isShow = false;
    } else {
        listOfaccessories.style.cssText = "visibility: hidden; opacity: 0; display: none;"
        navigation.style.gap = "4rem";
        mobileAccessoriesMainContainer.removeAttribute("margin-top-mobile-accessories");
        isShow = true;
    }
})


const mobileAccessories = document.querySelector("#mobile-accessories")

mobileAccessories.addEventListener("click", () => {
    if (isShow) {
        listOfaccessories.style.cssText = "visibility: visible; opacity: 1;"
        isShow = false;
    } else {
        listOfaccessories.style.cssText = "visibility: hidden; opacity: 0;"
        isShow = true;
    }
})



//toggle menu to open or close navigation
const active = document.querySelector(".active");
const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    active.classList.toggle("active");

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


// Functionality for "Add to Cart" button
const addToCart = document.querySelectorAll("#add-to-cart-btn");

addToCart.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        location.reload();

        const product = e.target.parentElement.parentElement;
        const productName = product.querySelector("h2").innerText;
        const productStringPrice = product.querySelector(".product-price h3").innerText;
        let productPrice = productStringPrice.match(/\d+/);
        console.log(typeof productPrice)
        const productQuantity = parseInt(product.querySelector("#number-of-quantity").innerText); // convert to number
        let parentContainer = product.closest(".product-section-1");
        const productImageSrc = parentContainer.querySelector("img").src;

        const selectedProduct = {
            name: productName,
            price: productPrice,
            quantity: productQuantity,
            image: productImageSrc
        };

        // Get existing cart from localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if product already exists
        const existingIndex = cart.findIndex(p => p.name === selectedProduct.name);

        if (existingIndex !== -1) {
            // Add quantity to existing product
            cart[existingIndex].quantity = parseInt(cart[existingIndex].quantity) + selectedProduct.quantity;
        } else {
            // If not, add as new
            cart.push(selectedProduct);
        }

        // Save back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        console.log("Cart updated:", cart);
    });
});



// Get the container where cart products will be displayed
const cartProductsContainer = document.querySelector(".cart-products-container");

// Get cart items from localStorage or initialize as empty array
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Get containers for empty and main cart page
const cartMainContainer = document.querySelector(".cart-main-container");
const cartEmptyPage = document.querySelector(".empty-cart-container");

// Show empty cart page if no items found
if (cartItems.length === 0) {
    cartEmptyPage.removeAttribute("id"); // show empty cart
    cartMainContainer.setAttribute("id", "remove-empty-page"); // hide actual cart
}

// Show cart item count on cart icon
const cartNumberOfQuantity = document.querySelector("#cart-number");
cartNumberOfQuantity.innerText = cartItems.length;

// Display each product in the cart
cartItems.forEach((item) => {
    const productElement = document.createElement("div");
    productElement.classList.add("cart-product");

    productElement.innerHTML = `
        <div class="cart-product-image">
            <img src=${item.image} alt="">
        </div>
        <div class="cart-product-details">
            <div class="cart-product-name-price">
                <h2>${item.name}</h2>
                <h3 class="changeColor">Rs.<h3 id="1" class="only-price">${item.price}</h3></h3>
            </div>
            <div class="product-quantity-btn" id="1">
                <button class="cart-decrement" id="1">-</button>
                <p class="number-of-quantity" id="1">${item.quantity}</p>
                <button class="cart-increment" id="1">+</button>
                <i class="fa-solid fa-trash trash-icon"></i>
            </div>
        </div>
        <div class="cart-product-border"></div>
    `;
    cartProductsContainer.appendChild(productElement);
});

// 📦 Update cart bill prices (MRP & total amount)
function updateCartBill() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalMRP = 0;

    // Calculate total MRP
    cart.forEach(item => {
        totalMRP += parseInt(item.price) * parseInt(item.quantity);
    });

    // Update MRP in DOM
    document.getElementById("total-mrp-price").innerText = `${totalMRP}`;

    // Gift Packaging charge
    const giftCheckbox = document.querySelector(".gift-package input[type='checkbox']");
    let giftCost = giftCheckbox && giftCheckbox.checked ? 25 : 0;

    // Handle coupon discount
    const coupon = document.querySelector(".apply-coupon #coupon-input-box");
    const couponApplyBtn = document.querySelector("#apply-button");
    const couponCode = "FS10";
    let couponDiscount = 0;

    // On coupon apply button click
    couponApplyBtn.addEventListener("click", () => {
        let userInput = coupon.value.trim().toUpperCase();
        if (userInput === couponCode) {
            couponDiscount = totalMRP * 0.1; // 10% discount
        }

        // Update total amount after applying coupon
        let totalAmount = totalMRP - couponDiscount + giftCost;
        document.getElementById("total-amount").innerText = `Rs ${totalAmount}`;
    });

    // Initial total amount (before coupon applied)
    let totalAmount = totalMRP - couponDiscount + giftCost;
    document.getElementById("total-amount").innerText = `Rs ${totalAmount}`;
}

// Run billing logic on page load
updateCartBill();

// Recalculate bill if gift checkbox is toggled
const giftCheckbox = document.querySelector(".gift-package input[type='checkbox']");
if (giftCheckbox) {
    giftCheckbox.addEventListener("change", updateCartBill);
}

// 🔄 Function to update quantity and handle removal if quantity < 1
function updateQuantityInLocalStorage(productName, change, productElement) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productIndex = cart.findIndex((p) => p.name === productName);
    if (productIndex !== -1) {
        cart[productIndex].quantity = parseInt(cart[productIndex].quantity) + change;

        // Remove item if quantity becomes 0
        if (cart[productIndex].quantity < 1) {
            cart.splice(productIndex, 1); // remove from array
            localStorage.setItem("cart", JSON.stringify(cart));
            productElement.remove(); // remove from page

            // If no items left, show empty cart
            if (cart.length === 0) {
                document.querySelector(".empty-cart-container").removeAttribute("id");
                document.querySelector(".cart-main-container").setAttribute("id", "remove-empty-page");
            }

            return;
        }

        // Update quantity in localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

// 🧠 Add event listeners for +, - and delete buttons after rendering cart
document.querySelectorAll(".cart-product").forEach((productElement) => {
    const productName = productElement.querySelector("h2").innerText;
    const decrementBtn = productElement.querySelector(".cart-decrement");
    const incrementBtn = productElement.querySelector(".cart-increment");
    const quantityDisplay = productElement.querySelector(".number-of-quantity");

    // ➖ Decrease quantity
    decrementBtn.addEventListener("click", () => {
        let currentQty = parseInt(quantityDisplay.innerText);
        quantityDisplay.innerText = currentQty - 1;

        updateQuantityInLocalStorage(productName, -1, productElement);
        updateCartBill();
    });

    // ➕ Increase quantity
    incrementBtn.addEventListener("click", () => {
        let currentQty = parseInt(quantityDisplay.innerText);
        quantityDisplay.innerText = currentQty + 1;

        updateQuantityInLocalStorage(productName, 1, productElement);
        updateCartBill();
    });

    // 🗑️ Remove item on trash icon click
    const trashIcon = productElement.querySelector(".trash-icon");
    trashIcon.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter((p) => p.name !== productName);
        localStorage.setItem("cart", JSON.stringify(cart));
        productElement.remove();

        if (cart.length === 0) {
            document.querySelector(".empty-cart-container").removeAttribute("id");
            document.querySelector(".cart-main-container").setAttribute("id", "remove-empty-page");
        }

        updateCartBill(); // update total
    });
});



