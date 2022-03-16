document.querySelector("button").addEventListener("click", () => {
    document.querySelector(".nav-ul").classList.toggle("show");
    if (document.querySelector(".menu-icon").getAttribute("src") === "images/icon-hamburger.svg") {
        document.querySelector(".menu-icon").setAttribute("src", "images/icon-close-menu.svg");
    } else {
        document.querySelector(".menu-icon").setAttribute("src", "images/icon-hamburger.svg");
    };
});