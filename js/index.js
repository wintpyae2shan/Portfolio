//Selecting the header element
const header = document.querySelector("header");

//Adding a scroll event listener to the window
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 0)
});

//Handling navigation bar functionality
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

//Toggling menu icon and navbar on menu icon click
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

//Resetting menu icon and navbar when scrolling
window.onscroll = () =>{
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
}