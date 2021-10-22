function myDay() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  firstMain[0].innerHTML = "My Day";
  secondMain[0].innerHTML = " + Add a task due today";
}
function imp() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  firstMain[0].innerHTML = "Important";
  secondMain[0].innerHTML = "+ Add a task";
}
function plan() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  firstMain[0].innerHTML = "Planned";
  secondMain[0].innerHTML = "+ Add a task due today";
}
function assign() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  firstMain[0].innerHTML = "Assigned to me";
  secondMain[0].innerHTML = "";
  
}
function myTask() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  firstMain[0].innerHTML = "Tasks";
  secondMain[0].innerHTML = "+ Add a task";
}
function showTask() {
  let input = document.getElementById("new-list");
  let addedTask = document.getElementById("added-task");
  var newlist = document.createElement("p");
  newlist.classList.add("new-styling");
  newlist.innerText = input.value;
  addedTask.appendChild(newlist);
  input.value = "";
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  firstMain[0].innerHTML = newlist.innerText;
  secondMain[0].innerHTML = "+ Add a task to"+ newlist.innerText;
  newlist.addEventListener('click', function(){
    firstMain[0].innerHTML = newlist.innerText;
    secondMain[0].innerHTML = "+ Add a task to"+ newlist.innerText;
    })
  newlist.addEventListener('dblclick', function(){
    addedTask.removeChild(newlist);
    firstMain[0].innerHTML = "Tasks";
    secondMain[0].innerHTML = "+ Add a task ";
  })
}
