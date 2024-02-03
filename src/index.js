import css from "./styles.css";
import makeHomePage from "./home.js";

const homeBtn = document.querySelector("#homeBtn");

homeBtn.addEventListener("click", makeHomePage);