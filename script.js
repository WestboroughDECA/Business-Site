document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const content = document.getElementById("content");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        content.classList.toggle("pushed");
    });
});