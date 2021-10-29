let mainTab = {MyDay: [],Important: [],Planned: [],Tasks:[] };
function myDay() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  firstMain[0].innerHTML = "MyDay";
  secondMain[0].style.display = "block";
  let lineArea = document.getElementsByClassName("line");
  lineArea[0].innerText ="";
  let captureImage = document.getElementById("assign-class");
  let lineBox = document.getElementsByClassName("lines");
  captureImage.style.display = "none";
  lineBox[0].style.display = "flex";
  let title = firstMain[0].innerHTML;
  var enterValue= document.getElementById("add");
  enterValue.onclick=function() {
    let subText = document.getElementById("sub-text");
    let lineArea = document.getElementsByClassName("line");
    let emptySpace = document.createElement("br");
    let para = subText.value;
    lineArea[0].append(para);
    lineArea[0].append(emptySpace);
    mainTab[title].push(para);
    subText.value = "";
  }
  for(let i = 0; i < mainTab[title].length; i++) {
    let enteredList = document.createElement("div");
    let innerList = document.createTextNode(mainTab[title][i]);
    enteredList.appendChild(innerList);
    lineArea[0].appendChild(enteredList);
  }
}
function imp() {
  let firstMain = document.getElementsByClassName("first-main");
  let secondMain = document.getElementsByClassName("second-main");
  let lineArea = document.getElementsByClassName("line");
  firstMain[0].innerHTML = "Important";
  secondMain[0].style.display = "block";
  lineArea[0].innerText="";
  let captureImage = document.getElementById("assign-class");
  let lineBox = document.getElementsByClassName("lines");
  captureImage.style.display = "none";
  lineBox[0].style.display = "flex";  
  let title = firstMain[0].innerHTML;
  var enterValue= document.getElementById("add");
  enterValue.onclick=function() {
    let subText = document.getElementById("sub-text");
    let lineArea = document.getElementsByClassName("line");
    let emptySpace = document.createElement("br");
    let para = subText.value;
    lineArea[0].append(para);
    lineArea[0].append(emptySpace);
    mainTab[title].push(para);
    subText.value = "";
  }
  for(let i = 0; i < mainTab[title].length; i++) {
    let enteredList = document.createElement("div");
    let innerList = document.createTextNode(mainTab[title][i]);
    enteredList.appendChild(innerList);
    lineArea[0].appendChild(enteredList);
  }
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
  let title = firstMain[0].innerHTML;
  var enterValue= document.getElementById("add");
  enterValue.onclick=function() {
    let subText = document.getElementById("sub-text");
    let lineArea = document.getElementsByClassName("line");
    let emptySpace = document.createElement("br");
    let para = subText.value;
    lineArea[0].append(para);
    lineArea[0].append(emptySpace);
    mainTab[title].push(para);
    subText.value = "";
  }
  for(let i = 0; i < mainTab[title].length; i++) {
    let enteredList = document.createElement("div");
    let innerList = document.createTextNode(mainTab[title][i]);
    enteredList.appendChild(innerList);
    lineArea[0].appendChild(enteredList);
  }
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
  let title = firstMain[0].innerHTML;
  var enterValue= document.getElementById("add");
  enterValue.onclick=function() {
    let subText = document.getElementById("sub-text");
    let lineArea = document.getElementsByClassName("line");
    let emptySpace = document.createElement("br");
    let para = subText.value;
    lineArea[0].append(para);
    lineArea[0].append(emptySpace);
    mainTab[title].push(para);
    subText.value = "";
  }
  for(let i = 0; i < mainTab[title].length; i++) {
    let enteredList = document.createElement("div");
    let innerList = document.createTextNode(mainTab[title][i]);
    enteredList.appendChild(innerList);
    lineArea[0].appendChild(enteredList);
  }
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
  
