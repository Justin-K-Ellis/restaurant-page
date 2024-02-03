import css from "./styles.css";
import makeHomePage from "./pages/home.js";
import makeAboutPage from "./pages/about";

// DOM elements
let content = document.querySelector("#content");
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

// First render Home page
makeHomePage();

// Render different pages
homeBtn.addEventListener("click", () => {
    clearContent();
    makeHomePage();
});

// TODO: Menu Page

aboutBtn.addEventListener("click", () => {
    clearContent();
    makeAboutPage();
})

function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}