import "./style.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

function showTab(loader, tabId) {
    document.querySelector('#content').replaceChildren();
    loader();
    document.querySelectorAll("nav button").forEach((btn) => {
        if (btn.id === tabId) btn.setAttribute("aria-current", "page");
        else btn.removeAttribute("aria-current");
    });
}

document.querySelector("#home").addEventListener("click", () => showTab(home, "home"));
document.querySelector("#menu").addEventListener("click", () => showTab(menu, "menu"));
document.querySelector("#contact").addEventListener("click", () => showTab(contact, "contact"));

showTab(home, "home");
