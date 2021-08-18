// Navigation bar -- toggle button
const navToggleBtn = document.getElementsByClassName("main-nav__btn")[0];
const navLinks = document.getElementsByClassName("main-nav__items-container")[0];

navToggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



// CURRENCY CONVERTER
const btnUSD = document.getElementById("btnUSD");
const btnEUR = document.getElementById("btnEUR");
let classNinetyFive = document.getElementsByClassName("product__price-95");
let classHundredFortyFive = document.getElementsByClassName("product__price-145");

btnUSD.addEventListener('click', changeToUSD);
btnEUR.addEventListener('click', changeToEUR);

// Get USD rate and change 
async function changeToUSD() {
    const res = await fetch('https://free.currconv.com/api/v7/convert?q=EUR_USD&compact=ultra&apiKey=a244e016d81af30204c8');
    const data = await res.json();
    const rate = Object.values(data);
    const rateUSD = rate[0];
    const priceNinetyFive = Math.ceil(95 * rateUSD);
    const priceHundredFortyFive = Math.ceil(145 * rateUSD);
    [].slice.call(classNinetyFive).forEach(function (classNinetyFive) {
        classNinetyFive.innerHTML = `${priceNinetyFive},00 $`;
    });
    [].slice.call(classHundredFortyFive).forEach(function (classHundredFortyFive) {
        classHundredFortyFive.innerHTML = `${priceHundredFortyFive},00 $`;
    });
};

function changeToEUR() {
    [].slice.call(classNinetyFive).forEach(function (classNinetyFive) {
        classNinetyFive.innerHTML = "95,00 €";
    });
    [].slice.call(classHundredFortyFive).forEach(function (classHundredFortyFive) {
        classHundredFortyFive.innerHTML = "145,00 €";
    });
};
