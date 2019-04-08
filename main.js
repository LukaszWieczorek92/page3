const menu = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", function(){
    menu.classList.toggle("active");
    nav.classList.toggle("active");
})