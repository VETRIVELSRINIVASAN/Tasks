function myDay() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  firstMain[0].innerHTML = "My Day";
  secondMain[0].style.display = "block";
  let lineArea = document.getElementsByClassName("line");
  lineArea[0].innerText ="";
  let captureImage = document.getElementById("assign-class");
  let lineBox = document.getElementsByClassName("lines");
  captureImage.style.display = "none";
  lineBox[0].style.display = "flex";
}
function subTask() {
   let subText = document.getElementById("sub-text");
   let lineArea = document.getElementsByClassName("line");
   var para = document.createElement("P");
   para.classList.add("new-style");
   para.innerText = subText.value;
   lineArea[0].appendChild(para);
   subText.value = "";
  }
function imp() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  let lineArea = document.getElementsByClassName("line");
  firstMain[0].innerHTML = "Important";
  secondMain[0].style.display = "block";
  //lineArea[0].innerText="";
  let captureImage = document.getElementById("assign-class");
  let lineBox = document.getElementsByClassName("lines");
  captureImage.style.display = "none";
  lineBox[0].style.display = "flex";  
}
function plan() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  firstMain[0].innerHTML = "Planned";
  secondMain[0].style.display = "block";
  let lineArea = document.getElementsByClassName("line");
  lineArea[0].innerText ="";
  let captureImage = document.getElementById("assign-class");
  let lineBox = document.getElementsByClassName("lines");
  captureImage.style.display = "none";
  lineBox[0].style.display = "flex";
}
function assign() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  let captureImage = document.getElementById("assign-class");
  let lineBox = document.getElementsByClassName("lines");
  firstMain[0].innerHTML = "Assigned to me";
  secondMain[0].style.display = "none";
  captureImage.style.display = "block";
  lineBox[0].style.display = "none";
}
function myTask() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  firstMain[0].innerHTML = "Tasks";
  secondMain[0].style.display = "block";
  let lineArea = document.getElementsByClassName("line");
  lineArea[0].innerText ="";
  let captureImage = document.getElementById("assign-class");
  let lineBox = document.getElementsByClassName("lines");
  captureImage.style.display = "none";
  lineBox[0].style.display = "flex";
}
function showTask() {
  let input = document.getElementById("new-list");
  let addedTask = document.getElementById("added-task");
  var newlist = document.createElement("li");
  newlist.classList.add("new-styling");
  newlist.innerText = input.value;
  addedTask.appendChild(newlist);
  input.value = "";
  let lineArea = document.getElementsByClassName("line");
  lineArea[0].innerText ="";
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  firstMain[0].innerHTML = newlist.innerText;
  secondMain[0].style.display = "block";
  let captureImage = document.getElementById("assign-class");
  let lineBox = document.getElementsByClassName("lines");
  captureImage.style.display = "none";
  lineBox[0].style.display = "flex";
  newlist.addEventListener('click', function(){
    firstMain[0].innerHTML = newlist.innerText;
    secondMain[0].style.display = "block";
    lineArea[0].innerText ="";
    let captureImage = document.getElementById("assign-class");
    let lineBox = document.getElementsByClassName("lines");
    captureImage.style.display = "none";
    lineBox[0].style.display = "flex";
    })
  newlist.addEventListener('dblclick', function(){
    addedTask.removeChild(newlist);
    firstMain[0].innerHTML = "Tasks";
    secondMain[0].style.display = "block";
  });
}
function navigate() {
  var sideBar = document.getElementById("side");
  var closedBar =document.getElementById("navigator");
  if (sideBar.style.display === "none") {
    sideBar.style.display = "flex";
    closedBar.style.display= "none";
  } else {
    sideBar.style.display = "none";
    closedBar.style.display ="flex";
  }
}
function closeNavigate() {
  var sideBar = document.getElementById("side");
  var closedBar =document.getElementById("navigator")
  if (closedBar.style.display === "flex") {
    sideBar.style.display = "flex";
    closedBar.style.display= "none";
  } else {
      sideBar.style.display = "none";
      closedBar.style.display ="flex";
  }
}
  
