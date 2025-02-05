let searchIcon = document.querySelector("#search");
let sMainBody = document.querySelector(".search-body");
let closebtn = document.querySelector("#close");
//functionality to clicking search & closing

//scroll to change navigation style
const navbar = document.querySelector("nav");
window.addEventListener("scroll",() => {
    if(window.scrollY > 5){
        navbar.style.filter="drop-shadow(0px 0px 4px #1515159b)";
    }else{
        navbar.style.filter="none";
    }
    
})

//showing search-body
searchIcon.addEventListener("click", () => {
    sMainBody.style.transform="translateY(0%)"
    document.querySelector("#search-input").focus();
    document.body.style.overflow="hidden";
    
});

//close search-body
closebtn.addEventListener("click", () => {
    sMainBody.style.transform="translateY(-100%)"
    document.body.style.overflow="auto";

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
        if(productName.includes(userValue)){
            product.classList.remove("hide");
        }else{
            product.classList.add("hide");
        }
       
    })
})




//click to open all products drop down menu
const dropDownMainEle = document.querySelector("#responsive-mobile-accessories");
const navigation = document.querySelector(".navigation");
const listOfaccessories = document.querySelector(".navigation .list-of-accessories");
isShow = true;

dropDownMainEle.addEventListener("click", () => {
    if (isShow) {
        // listOfaccessories.style.cssText = "display: block;"
        listOfaccessories.style.cssText = "visibility: visible; opacity: 1;display: block;"
        navigation.style.gap = "36px";
        isShow = false;
    } else {
        listOfaccessories.style.cssText = "visibility: hidden; opacity: 0; display: none;"
        navigation.style.gap = "101px";
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
