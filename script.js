//get form  data on form submit
//store the data in global array
//create a display function to display all the data from array to entry list

let taskList = [];
let badList = [];
const invalidchars = ["+", "-", "e", "E"];

const hrsPerWeek = 24 * 7;

const input = document.querySelector(".hours-input");

input.addEventListener("keydown", (e) => {
  invalidchars.includes(e.key) && e.preventDefault();
});

document.getElementById("form-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const task = document.querySelector(".task-input").ariaValueMax;
  const hr = document.querySelector(".hours-input").values;
});
