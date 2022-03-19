/* MOBILE NAVIGATION MENU */
document.querySelector("button").addEventListener("click", () => {
    document.querySelector(".nav-ul").classList.toggle("show");
    document.querySelector(".menu_shadow").classList.toggle("overlay");
    if (document.querySelector(".menu-icon").getAttribute("src") === "images/icon-hamburger.svg") {
        document.querySelector(".menu-icon").setAttribute("src", "images/icon-close-menu.svg");
    } else {
        document.querySelector(".menu-icon").setAttribute("src", "images/icon-hamburger.svg");
    };
});
/* MOBILE NAVIGATION MENU */

/* BOOKMARK */
document.querySelector(".bookmark").addEventListener("click", () => {
    document.querySelector(".bookmark").classList.toggle("bookmarked");
    if (document.querySelector(".bookmark span").textContent == "Bookmark") {
        document.querySelector(".bookmark span").textContent = "Bookmarked";
    } else {
        document.querySelector(".bookmark span").textContent = "Bookmark";
    }
});
/* BOOKMARK */

/* SELECTION DEPENDING ON WHICH BUTTON IS CLICKED */
document.querySelector(".bamboo_stand_button").addEventListener("click", () => {
    document.querySelector(".selection_modal").style.display = "flex";
    document.querySelector("#bamboo_stand_pledge").checked = true;
    if (document.querySelector("#bamboo_stand_pledge").checked == true) {
        document.querySelector(".bamboo_stand").style.border = "2px solid hsl(176, 50%, 47%)";
        document.querySelector(".bamboo_stand_pledge_input_wrapper").style.display = "flex";
        document.querySelector(".black_edition_stand").style.border = "1px solid rgb(224, 224, 224)";
        document.querySelector(".black_edition_stand_pledge_input_wrapper").style.display = "none";
    }
});
document.querySelector(".black_edition_button").addEventListener("click", () => {
    document.querySelector(".selection_modal").style.display = "flex";
    document.querySelector("#black_edition_stand_pledge").checked = true;
    if (document.querySelector("#black_edition_stand_pledge").checked == true) {
        document.querySelector(".black_edition_stand").style.border = "2px solid hsl(176, 50%, 47%)";
        document.querySelector(".black_edition_stand_pledge_input_wrapper").style.display = "flex";
        document.querySelector(".bamboo_stand").style.border = "1px solid rgb(224, 224, 224)";
        document.querySelector(".bamboo_stand_pledge_input_wrapper").style.display = "none";
    }
});
/* SELECTION DEPENDING ON WHICH BUTTON IS CLICKED */

/* CHANGING SELECTION WHILE SELECTION MODAL IS OPEN */
document.querySelector("#black_edition_stand_pledge").addEventListener("click", () => {
    document.querySelector("#black_edition_stand_pledge").checked = true;
    document.querySelector(".black_edition_stand").style.border = "2px solid hsl(176, 50%, 47%)";
    document.querySelector(".black_edition_stand_pledge_input_wrapper").style.display = "flex";
    document.querySelector(".bamboo_stand").style.border = "1px solid rgb(224, 224, 224)";
    document.querySelector(".bamboo_stand_pledge_input_wrapper").style.display = "none";
    document.querySelector(".no_reward_pledge").style.border = "1px solid rgb(224, 224, 224)";
    document.querySelector(".no_reward_pledge_input_wrapper").style.display = "none";
});
document.querySelector("#bamboo_stand_pledge").addEventListener("click", () => {
    document.querySelector("#bamboo_stand_pledge").checked = true;
    document.querySelector(".bamboo_stand").style.border = "2px solid hsl(176, 50%, 47%)";
    document.querySelector(".bamboo_stand_pledge_input_wrapper").style.display = "flex";
    document.querySelector(".black_edition_stand").style.border = "1px solid rgb(224, 224, 224)";
    document.querySelector(".black_edition_stand_pledge_input_wrapper").style.display = "none";
    document.querySelector(".no_reward_pledge").style.border = "1px solid rgb(224, 224, 224)";
    document.querySelector(".no_reward_pledge_input_wrapper").style.display = "none";
});
document.querySelector("#pledge_with_no_reward").addEventListener("click", () => {
    document.querySelector("#pledge_with_no_reward").checked = true;
    document.querySelector(".no_reward_pledge").style.border = "2px solid hsl(176, 50%, 47%)";
    document.querySelector(".no_reward_pledge_input_wrapper").style.display = "flex";
    document.querySelector(".black_edition_stand").style.border = "1px solid rgb(224, 224, 224)";
    document.querySelector(".black_edition_stand_pledge_input_wrapper").style.display = "none";
    document.querySelector(".bamboo_stand").style.border = "1px solid rgb(224, 224, 224)";
    document.querySelector(".bamboo_stand_pledge_input_wrapper").style.display = "none";
});
/* CHANGING SELECTION WHILE SELECTION MODAL IS OPEN */

/* CLOSE SELECTION MODAL WHEN CLICKED OUTSIDE IT */
window.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".selection_modal")) {
        document.querySelector(".selection_modal").style.display = "none";
    }
    if (e.target == document.querySelector(".after_selection_modal")) {
        document.querySelector(".after_selection_modal").style.display = "none";
    }
});
/* CLOSE SELECTION MODAL WHEN CLICKED OUTSIDE IT */

/* OPEN SELECTION MODAL FROM "BACK THIS PROJECT" BUTTON */
document.querySelector(".back").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".selection_modal").style.display = "flex";
});
/* OPEN SELECTION MODAL FROM "BACK THIS PROJECT" BUTTON */

/* CLOSE THE SELECTION MODAL WHEN CLICKING THE CLOSE BUTTON */
document.querySelector(".close_button").addEventListener("click", () => {
    document.querySelector(".selection_modal").style.display = "none";
});
/* CLOSE THE SELECTION MODAL WHEN CLICKING THE CLOSE BUTTON */

/* AFTER SELECTION MODAL - SUCCESS */
document.querySelector(".black_edition_stand_submit").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".selection_modal").style.display = "none";
    document.querySelector(".after_selection_modal").style.display = "flex";

});
document.querySelector(".bamboo_stand_submit").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".selection_modal").style.display = "none";
    document.querySelector(".after_selection_modal").style.display = "flex";
});
document.querySelector(".no_reward_submit").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".selection_modal").style.display = "none";
    document.querySelector(".after_selection_modal").style.display = "flex";
});
/* AFTER SELECTION MODAL - SUCCESS */

/* CLOSE AFTER SELECTION MODAL */
document.querySelector(".confirmation_button").addEventListener("click", () => {
    document.querySelector(".after_selection_modal").style.display = "none";
});
/* CLOSE AFTER SELECTION MODAL */


