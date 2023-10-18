console.log("Welcome to Kanban");

const themeChangeBtn = document.getElementById("themeChangeBtn");
const addNewTask = document.getElementById("addNewTask");

const body = document.querySelector("body");
const aside = document.querySelector("aside");
const main = document.querySelector("main");

let mainTheme = localStorage.getItem("theme");
// if ( mainTheme && mainTheme == "light" ) {
//     body.classList.add("light");
// } else {
//     body.classList.add("dark");
// }
// themeChangeBtn.addEventListener("click", (e)=>{
//     if(Array.from(body.classList).some(className => className == "dark")) {
//         body.classList.remove("dark");
//         body.classList.add("light");
//         localStorage.setItem("theme", "light")
//     } else {
//         body.classList.remove("light");
//         body.classList.add("dark");
//         localStorage.setItem("theme", "dark")
//     }
// });

let modal = document.getElementById("modal")
addNewTask.addEventListener("click", (e)=>{
    aside.classList.add("blur");
    main.classList.add("blur");
    modal.style.display = "flex";
});