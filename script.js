const navButton = document.querySelector(".fa-caret-left");
const searchButton = document.querySelector(".fa-search");
const exitSearchButton = document.querySelector(".fa-times");
const menuVertical = document.querySelector(".menu-vertical");
const menuVerticalBox = document.querySelector(".menu-vertical__box-content");
const menuInput = document.querySelector(".menu__input--hidden");


navButton.addEventListener("click", () => {
    navButton.classList.toggle("fa-caret-left--is-rotate");
    menuVertical.classList.toggle("aside--is-hidden");
})

window.addEventListener("scroll", () => {
if(window.scrollY >= 88) {
    menuVerticalBox.classList.remove("menu-vertical--start");
} else if(window.scrollY <= 88) {
 menuVerticalBox.classList.add("menu-vertical--start")
}
})

searchButton.addEventListener("click", () => {
    menuInput.classList.add("menu__input--appears");
    searchButton.style.display = "none";
    exitSearchButton.style.display = "inline-block";
})

exitSearchButton.addEventListener("click", () => {
    menuInput.value = "";
    menuInput.classList.remove("menu__input--appears");
    exitSearchButton.style.display = "none";
    searchButton.style.display = "inline-block";
})

