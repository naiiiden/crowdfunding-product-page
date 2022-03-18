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

let modal = document.querySelector(".selection_modal");
let button = document.querySelector(".item button");
button.addEventListener("click", () => {
    modal.style.display = "flex";
});
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

document.querySelector(".close_button").addEventListener("click", () => {
    modal.style.display = "none";
});