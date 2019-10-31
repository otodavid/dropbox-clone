let accItem = document.querySelectorAll(".accordionItem")
let accHd = document.querySelectorAll(".accordionHeading");
let navExtend = document.querySelectorAll(".list");
let extend = document.querySelectorAll(".extend");
let monthlyPrice = document.getElementById("billedMonthly");
let yearlyPrice = document.getElementById("billedYearly");
let standardPrice = document.querySelector(".stnd");
let advancedPrice = document.querySelector(".advd");
let enterprisePrice = document.querySelector(".entr");

// code for sticky navbar on scroll
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    navBar = document.querySelector("header");
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        navBar.style.background = "white";
        navBar.style.boxShadow = "1px 1px 5px rgba(0, 0, 0, 0.3)"
    } else {
        navBar.style.background = "";
        navBar.style.boxShadow = null;
    }
}

// code for pricing section
function changeYearlyPrice() {
    if (yearlyPrice.checked) {
        standardPrice.innerHTML = "$12.50";
        advancedPrice.innerHTML = "$20";
        enterprisePrice.innerHTML = "$80";
    }
}

function changeMonthlyPrice() {
    if (monthlyPrice.checked) {
        standardPrice.innerHTML = "$15";
        advancedPrice.innerHTML = "$25";
        enterprisePrice.innerHTML = "$100";
    }
}

changeMonthlyPrice();

yearlyPrice.addEventListener("click", changeYearlyPrice);
monthlyPrice.addEventListener("click", changeMonthlyPrice);

// code for fao section - accordion
function toggleItem() {
    var itemClass = this.parentNode.className;
    accItem.forEach(item => {
        item.className = 'accordionItem close';
    });
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}

accHd.forEach(item => {
    item.addEventListener('click', toggleItem, false);
});

const hamburger = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li");
const list = document.querySelectorAll(".menu li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});



list.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
        }
    })
})