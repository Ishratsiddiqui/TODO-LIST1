const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    seveData();
 }

 listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        seveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        seveData();
    }
 }, false);

 function seveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
 }
 function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
 }
 showTask();