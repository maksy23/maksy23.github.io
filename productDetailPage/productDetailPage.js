// Navigation bar -- toggle button
const navToggleBtn = document.getElementsByClassName("main-nav__btn")[0];
const navLinks = document.getElementsByClassName("main-nav__items-container")[0];

navToggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



// CURRENCY CONVERTER
const btnUSD = document.getElementById("btnUSD");
const btnEUR = document.getElementById("btnEUR");

const price = document.querySelector("#product-1");
// To hold the actual price value
const actualPrice = parseInt(price.innerText);

btnUSD.addEventListener('click', changeToUSD);
btnEUR.addEventListener('click', changeToEUR);

// Get USD rate and change 
async function changeToUSD() {
    const res = await fetch('https://free.currconv.com/api/v7/convert?q=EUR_USD&compact=ultra&apiKey=a244e016d81af30204c8');
    const data = await res.json();
    const rateUSD = data.EUR_USD;
    let priceUSD = Math.floor(actualPrice * rateUSD);
    priceUSD = "$ " + priceUSD.toString() + ",00";
    price.innerText = priceUSD;
};

// Change back to EUR
function changeToEUR() {
    let priceEUR = Math.floor(actualPrice);
    priceEUR = priceEUR.toString() + ",00 €";
    price.innerText = priceEUR;
};