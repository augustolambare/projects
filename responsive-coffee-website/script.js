console.log("JavaScript file loaded");

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",  () => {
    // Toggle the class "show-mobile-menu" on the body element when the button is clicked
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click",  () => {
    // Close the mobile menu when the close button is clicked
    document.body.classList.toggle("show-mobile-menu");
});