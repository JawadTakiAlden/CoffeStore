let productSec = document.getElementById("products");
let productsBox = document.querySelectorAll(".products .box");
let menuBoxs = document.querySelectorAll(".menu .box");
let reviewBox = document.querySelectorAll(".review .box")
let BlogBoxs = document.querySelectorAll(".blog .box");
let navbar = document.querySelector(".header .nav")
let btnBars = document.getElementById("btn-bars");
let searchBox = document.querySelector(".header .search-box")
let btnSearch = document.getElementById("btn-search");
let btnShoping = document.getElementById("btn-shoping");
let cartContainer = document.querySelector(".header .cart-container");
window.onscroll = () => {
    searchBox.classList.remove("open");
    cartContainer.classList.remove("open");
    navbar.classList.remove("open");
    if(window.scrollY >= productSec.offsetTop -100){
        productsBox[0].style.left = "0";
        productsBox[2].style.right = "0";
        productsBox[1].style.opacity = "1";
    }
    // if(window.scrollY >= menuBoxs[0].offsetTop -100){
    //     menuBoxs.forEach((box) => {
    //         box.style.opacity = "1"
    //     })
    // }
    menuBoxs.forEach((box) => {
        if(window.scrollY >= box.offsetTop -300){
            box.classList.add("anm")
        }
    })
    reviewBox.forEach((box) => {
        if(window.scrollY >= box.offsetTop -300){
            box.style.transform = "scale(1)";
            box.style.opacity = "1";
        }
    })
    BlogBoxs.forEach((box) => {
        if(window.scrollY >= box.offsetTop - 300){
            box.classList.add("anm")
        }
    })
}
btnBars.onclick = () => {
    searchBox.classList.remove("open");
    cartContainer.classList.remove("open");
    navbar.classList.toggle("open");
}
btnSearch.onclick = () => {
    navbar.classList.remove("open");
    cartContainer.classList.remove("open");
    searchBox.classList.toggle("open");
}
btnShoping.onclick = () => {
    navbar.classList.remove("open");
    searchBox.classList.remove("open");
    cartContainer.classList.toggle("open");
}

