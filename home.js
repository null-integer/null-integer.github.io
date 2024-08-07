
// Typewritter effect variables
let x = 0;
let title = "Alfonso Barrera";
let speed = 100;


// Personalized Greeting variables
const d = new Date();
let hour = d.getHours();
let greeting = "Hello!";
/*
  5-11 = morning
  12-17 =  afternoon
  18-22 = evening
  23 - 4 = night
*/


// Deciding which greeting to use
if(hour >= 5 && hour <= 11){
  greeting = "Good morning!";
}else if(hour >= 12 && hour <= 17){
  greeting = "Good Afternoon!";
}else if(hour >= 18 && hour <= 22){
  greeting = "Good Evening!";
}else{
  greeting = "Good Night!";
}

document.getElementById("currentTime").innerHTML = greeting;

//Running TypeWritter function

typeWriter();

function typeWriter() {
    if (x < title.length) {
      document.getElementById("siteTitle").innerHTML += title.charAt(x);
      x++;
      setTimeout(typeWriter, speed);
    }
}


// Displaying Timelines items
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", DisplayContent);
DisplayContent();

function DisplayContent(){
    const TriggerBottom = (window.innerHeight / 5) * 4;


    boxes.forEach((box) => {
        const topBox = box.getBoundingClientRect().top;

        if(topBox < TriggerBottom){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    });
}


//Anchoring menus

function anchor(menu){
  if(menu.childNodes[3].style.display == "block"){
    //Deanchor
    menu.childNodes[3].style.display = "none";
    menu.childNodes[3].style.color = "#818181";
    menu.style.color = "#818181";

  }else{
    //Anchor
    menu.childNodes[3].style.display = "block";
    menu.childNodes[3].style.position = "relative";
    menu.style.color = "#f1f1f1";
  }
}

function showMenu(menu){
  menu.style.color = "#f1f1f1";
}

function hideMenu(menu){
  menu.style.color = "#818181";
}

let menus = document.getElementsByClassName("projectMenu");
Array.from(menus).forEach((menu)=>{
  menu.addEventListener("mouseover", function(){showMenu(menu)});
  menu.addEventListener("mouseout", function(){hideMenu(menu)});
  if(menu.childElementCount > 0){
    menu.childNodes[1].addEventListener("click", function(){anchor(menu)});
  }
});