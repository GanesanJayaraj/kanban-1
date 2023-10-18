console.log("Welcome to Kanban");

const themeChangeBtn = document.getElementById("themeChangeBtn");
const addNewTask = document.getElementById("addNewTask");
const closeIcon = document.getElementById("closeIcon");

const modalName = document.getElementById("name");
const modalTxtarea = document.getElementById("txtarea");
const modalTasktype = document.getElementById("tasktype");

const saveTask = document.getElementById("saveTask");

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
closeIcon.addEventListener("click" , ()=>{
    aside.classList.remove("blur");
    main.classList.remove("blur");
    modal.style.display = "none";
});
let getLocalStoreTasks = localStorage.getItem("allTasks");
let allListTasks = [];
if(!getLocalStoreTasks) {
    localStorage.setItem("allTasks" , JSON.stringify([]));
} else {
    allListTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
}
saveTask.addEventListener("click" , (e) => {
    let getModalName = modalName.value;
    let getModalTxtarea = modalTxtarea.value;
    let getModalTasktype = modalTasktype.value;

    let obj = {
        taskName : getModalName, 
        taskTxtarea : getModalTxtarea, 
        tasktype : getModalTasktype 
    }
    allListTasks.push(obj)
    localStorage.setItem("allTasks" , JSON.stringify(allListTasks))
    console.log(allListTasks)
});