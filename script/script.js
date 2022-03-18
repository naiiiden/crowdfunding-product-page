document.querySelector("button").addEventListener("click", () => {
    document.querySelector(".nav-ul").classList.toggle("show");
    document.querySelector(".menu_shadow").classList.toggle("overlay");
    if (document.querySelector(".menu-icon").getAttribute("src") === "images/icon-hamburger.svg") {
        document.querySelector(".menu-icon").setAttribute("src", "images/icon-close-menu.svg");
    } else {
        document.querySelector(".menu-icon").setAttribute("src", "images/icon-hamburger.svg");
    };
});

document.querySelector(".bookmark").addEventListener("click", () => {
    document.querySelector(".bookmark").classList.toggle("bookmarked");
    if (document.querySelector(".bookmark span").textContent == "Bookmark") {
        document.querySelector(".bookmark span").textContent = "Bookmarked";
    } else {
        document.querySelector(".bookmark span").textContent = "Bookmark";
    }
});
