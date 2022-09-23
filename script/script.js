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
document.querySelector(".back").addEventListener("click", () => {
    document.querySelector(".selection_modal").style.display = "flex";
    document.querySelector("#pledge_with_no_reward").checked = true;
    document.querySelector(".no_reward_pledge").style.border = "2px solid hsl(176, 50%, 47%)";
    document.querySelector(".no_reward_pledge_input_wrapper").style.display = "flex";
    document.querySelector(".black_edition_stand").style.border = "1px solid rgb(224, 224, 224)";
    document.querySelector(".black_edition_stand_pledge_input_wrapper").style.display = "none";
    document.querySelector(".bamboo_stand").style.border = "1px solid rgb(224, 224, 224)";
    document.querySelector(".bamboo_stand_pledge_input_wrapper").style.display = "none";
});
document.querySelector(".bamboo_stand_button").addEventListener("click", () => {
    document.querySelector(".selection_modal").style.display = "flex";
    document.querySelector("#bamboo_stand_pledge").checked = true;
    if (document.querySelector("#bamboo_stand_pledge").checked == true) {
        document.querySelector(".bamboo_stand").style.border = "2px solid hsl(176, 50%, 47%)";
        document.querySelector(".bamboo_stand_pledge_input_wrapper").style.display = "flex";
        document.querySelector(".black_edition_stand").style.border = "1px solid rgb(224, 224, 224)";
        document.querySelector(".black_edition_stand_pledge_input_wrapper").style.display = "none";
        document.querySelector(".no_reward_pledge").style.border = "1px solid rgb(224, 224, 224)";
        document.querySelector(".no_reward_pledge_input_wrapper").style.display = "none";
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
        document.querySelector(".no_reward_pledge").style.border = "1px solid rgb(224, 224, 224)";
        document.querySelector(".no_reward_pledge_input_wrapper").style.display = "none";
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

/* CLOSE THE SELECTION MODAL WHEN CLICKING THE CLOSE BUTTON */
document.querySelector(".close_button").addEventListener("click", () => {
    document.querySelector(".selection_modal").style.display = "none";
});
/* CLOSE THE SELECTION MODAL WHEN CLICKING THE CLOSE BUTTON */

/* AFTER SELECTION MODAL - SUCCESS */
let backers = 5007;
document.querySelector(".black_edition_stand_submit").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".selection_modal").style.display = "none";
    document.querySelector(".after_selection_modal").style.display = "flex";
    backers += 1;
    document.querySelector(".backers").textContent = backers;
    document.querySelector(".money small").textContent = `${parseInt(document.querySelector(".money small").textContent) + parseInt(document.querySelector(".black_edition_stand_value").value)}`;
    document.querySelector(".black_edition_left").textContent = parseInt(document.querySelector(".black_edition_left").textContent) - 1;
    document.querySelector(".modal_black_edition_left").textContent = parseInt(document.querySelector(".modal_black_edition_left").textContent) - 1;
    document.querySelector("progress").value = parseInt(document.querySelector(".money small").textContent);
});
document.querySelector(".bamboo_stand_submit").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".selection_modal").style.display = "none";
    document.querySelector(".after_selection_modal").style.display = "flex";
    backers += 1;
    document.querySelector(".backers").textContent = backers;
    document.querySelector(".money small").textContent = `${parseInt(document.querySelector(".money small").textContent) + parseInt(document.querySelector(".bamboo_stand_value").value)}`;
    document.querySelector(".bamboo_stand_left").textContent = parseInt(document.querySelector(".bamboo_stand_left").textContent) - 1;
    document.querySelector(".modal_bamboo_stand_left").textContent = parseInt(document.querySelector(".modal_bamboo_stand_left").textContent) - 1;
    document.querySelector("progress").value = parseInt(document.querySelector(".money small").textContent);
});

document.querySelector(".no_reward_submit").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".selection_modal").style.display = "none";
    document.querySelector(".after_selection_modal").style.display = "flex";
    backers += 1;
    document.querySelector(".backers").textContent = backers;
    document.querySelector(".money small").textContent = `${parseInt(document.querySelector(".money small").textContent) + parseInt(document.querySelector(".no_reward_value").value)}`;
    document.querySelector("progress").value = parseInt(document.querySelector(".money small").textContent);
});

/* AFTER SELECTION MODAL - SUCCESS */

/* CLOSE AFTER SELECTION MODAL */
document.querySelector(".confirmation_button").addEventListener("click", () => {
    document.querySelector(".after_selection_modal").style.display = "none";
});
/* CLOSE AFTER SELECTION MODAL */

/* PREVENT TEXT INPUT */
document.querySelectorAll(".money_input").forEach(input => {
    input.addEventListener("keypress", e => {
        if (!/[0-9\/]+/.test(e.key)) { //PREVENTS FROM TYPING CHARACTERS WHICH ARE DIFFERENT THAN 0-9 AND .
            e.preventDefault();
        };
    });
});
/* PREVENT TEXT INPUT */


