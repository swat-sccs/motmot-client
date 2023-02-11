// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

// Loading bootstrap with optional features
initBootstrap({
  tooltip: false,
  popover: false,
  toasts: false,
});

// Your app code
console.log(`Hello ${process.env.HELLO}`);
let word = ["cyclone", "curling", "carlos", "calf", "crime"]
let title = document.getElementById("sccsheader")
let i = 0

var intervalID = window.setInterval(() => {
  let uppercaseWord = word[i][0].toUpperCase() + word[i].slice(1);
  title.innerHTML = `Swarthmore College <span class="sccs-accent-color">${uppercaseWord}</span> Society`
  i++
  if (i==word.length) {
    i=0
  }
}, 1000)
