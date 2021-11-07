// Declare DOM elements
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const nav = document.querySelector("nav");
const last = document.querySelector(".last")
const next = document.querySelector(".next")
const main = document.querySelector("main")
const body = document.querySelector("body")

// Hamburger menu toggle
function toggleMenu () {
    console.log("Toggled")
    nav.classList.toggle("hidden")
}

let slideIndex = 0

// increments slide
function plusSlides(n) {
    console.log(slideIndex)
    slideIndex += n
    console.log("fired")
    if (slideIndex > 3) {
        slideIndex = 1
        showSlides(slideIndex)
        return slideIndex
    } else if (slideIndex < 1) {
        slideIndex = 3
        showSlides(slideIndex)
        return slideIndex
    } else {
        showSlides(slideIndex)
    }
}

// adjusts main element for correct slide
function showSlides(n) {
    switch (n) {
        case 0:
            main.style.transform = "translateX(0)"
            break;
        
        case 1:
            main.style.transform = "translateX(-100vw)"
            break;
        
        case 2:
            main.style.transform = "translateX(-200vw)"
            break;
    
        default:
            main.style.transform = "translateX(0)"
            break;
    }
}

// Event Listeners
menuOpen.addEventListener("click", toggleMenu)
menuClose.addEventListener("click", toggleMenu)

next.addEventListener("click", () => {plusSlides(1)})
last.addEventListener("click", () => {plusSlides(-1)})