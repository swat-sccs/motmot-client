// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import axios from "axios"
// Loading bootstrap with optional features
initBootstrap({
  tooltip: false,
  popover: false,
  toasts: false,
});

// Your app code
console.log(`Hello ${process.env.HELLO}`);
let title = document.getElementById("sccsheader")

var intervalID = window.setInterval(() => {
  axios.get('https://ipinfo.io/ip')
  .then(response => {
    title.innerHTML = `Swarthmore College <span class="sccs-accent-color">${response.data}</span> Society`
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}, 1000)
