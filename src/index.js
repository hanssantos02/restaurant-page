import { home } from "./home.js";
import { menu } from "./menu.js";

function showTab(loader) {
    document.querySelector('#content').replaceChildren();
    loader();
}

document.querySelector("#home").addEventListener("click", () => showTab(home));
document.querySelector("#menu").addEventListener("click", () => showTab(menu));

home();