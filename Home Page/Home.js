
//change product image on home page
const mainDisplayImagesContainer = document.querySelector(".display-images");
// let decCount = 0;
let count = 0;
setInterval(() => {
    count++;
    mainDisplayImagesContainer.innerHTML = `<img src="/Assets/images/${count}.png" alt="products">`
    if (count == 4) {
        count = 0;
    }
}, 1500)


//print each letters
const textContainer = document.querySelector(".left-container h1");
let texts = ["Welcome To Final Solution", "Top-Quality Accessories","Expert Repairs!"]
isforward = true;
let countIncrease = 0;
let arrayCount = 0;
const setIntervalId = setInterval(() => {
    textContainer.innerText = texts[arrayCount].substring(0, countIncrease);
    if (isforward) {
        countIncrease++;
    } else {
        countIncrease--;
    }

    if (countIncrease > texts[arrayCount].length) {
        isforward = false;
    }

    if (countIncrease < 0) {
        isforward = true;
        arrayCount++;
    }

    if (arrayCount == texts.length) {
        countIncrease = 0;
        arrayCount = 0;
    }

}, 80)
