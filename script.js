var a = document.getElementById("myModal");
var target1_count = 1;
var target2_count = 1;
var target3_count = 1;
var target4_count = 1;
var target5_count = 1;
var target6_count = 1;
var target7_count = 1;
var target8_count = 1;
var target9_count = 1;
var One = document.getElementById("target1");
var Two = document.getElementById("target2");
var Three = document.getElementById("target3");
var Four = document.getElementById("target4");
var Five = document.getElementById("target5");
var Six = document.getElementById("target6");
var Seven = document.getElementById("target7");
var Eight = document.getElementById("target8");
var Nine = document.getElementById("target9");
var input_div = document.getElementById("answer");
var interval;
var timerStarted = false;
var clown_done = false;
var horn_done = false;

function checkInput() {
  alert("Continue to the next game if you wish to save Eric...");
  window.location.href = "https://1o-o7.github.io/JV-MirrorEscapeRoom/ 
"; // redirect to next sandbox
  // You can call whatever function you want next here
}

//---------Got Correct Modal---------//
function showCorrect() {
  document.getElementById("WithinWord").style.display = "block";
}
//----------Time Run out Modal----------//
function showTimeUp() {
  document.getElementById("TimeUp").style.display = "block";
}
//----------show Note Modal----------//
function showNote() {
  document.getElementById("note").style.display = "flex";
}
function hideNote() {
  document.getElementById("note").style.display = "none";
  document.getElementById("clownHorn").play();
}
//--------Inventory Modal--------//
function showInventory() {
  document.getElementById("inventory").style.display = "flex";
  console.log("yay");
}
function hideInventory() {
  document.getElementById("inventory").style.display = "none";
}
//------------Intrustions Modal-------//
function showInstructions() {
  document.getElementById("Instructions").style.display = "flex";
  console.log("yay");
}
function hideInstructions() {
  document.getElementById("Instructions").style.display = "none";
  if (!timerStarted) {
    startTimer();
    timerStarted = true; // prevents restarting
  }
}
///----------user input modal------///
function showUserInput() {
  document.getElementById("Input").style.display = "flex";
  console.log("yuhh");
}
function hideUserInput() {
  document.getElementById("Input").style.display = "none";
}
//--------------------target change--------------//
function targetChange(img) {
  if (img.src.includes("images/Target_Bullseye-Red.png")) {
    img.src = "images/Target_Bullseye-Magenta.png";
    horn_check();
    clown_check();
  } else if (img.src.includes("images/Target_Bullseye-Magenta.png")) {
    img.src = "images/Orange.png";
    horn_check();
    clown_check();
  } else if (img.src.includes("images/Orange.png")) {
    img.src = "images/yellow.png";
    horn_check();
    clown_check();
  } else if (img.src.includes("images/yellow.png")) {
    img.src = "images/green.png";
    horn_check();
    clown_check();
  } else if (img.src.includes("images/green.png")) {
    img.src = "images/target_Bullseye-Blue.png";
    horn_check();
    clown_check();
  } else if (img.src.includes("images/target_Bullseye-Blue.png")) {
    img.src = "images/Target_Bullseye-Purple.png";
    horn_check();
    clown_check();
  } else {
    img.src = "images/Target_Bullseye-Red.png"; // loop back
  }
}
//------------Word Pops up--------------//
function clown_check() {
  if (
    One.src.includes("target_Bullseye-Blue.png") &&
    Two.src.includes("Target_Bullseye-Red.png") &&
    Three.src.includes("Target_Bullseye-Purple.png") &&
    Four.src.includes("Orange.png") &&
    Five.src.includes("green.png")
  ) {
    console.log("YES!");
    One.src = "images/C_Letter.png";
    Two.src = "images/L_Letter.png";
    Three.src = "images/O_Letter.png";
    Four.src = "images/W_Letter.png";
    Five.src = "images/N_letter.png";
    clown_done = true;

    if (clown_done == true && horn_done == true) {
      setTimeout(showCorrect, 1000);
    }
  } else {
    console.log("NO!");
  }
}
function horn_check() {
  if (
    Six.src.includes("Target_Bullseye-Magenta.png") &&
    Seven.src.includes("Target_Bullseye-Purple.png") &&
    Eight.src.includes("yellow.png") &&
    Nine.src.includes("green.png")
  ) {
    console.log("YES!");
    Six.src = "images/H_Letter.png";
    Seven.src = "images/O_Letter.png";
    Eight.src = "images/R-Letter.png";
    Nine.src = "images/N_letter.png";
    horn_done = true;

    if (clown_done == true && horn_done == true) {
      setTimeout(showCorrect, 1000);
    }
  } else {
    console.log("NO!");
  }
}

function Restart() {
  alert("Restart, Hurry Eric Doesn't have much time!");
  window.location.href = "https://6t2sjx.csb.app/";
}
//-------------TIMER----------------//
var countdown = document.getElementById("countdown");
var interval;

function startTimer() {
  var timeLeft = 90;
  countdown.textContent = timeLeft;

  interval = setInterval(function () {
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(interval);
      countdown.textContent = "0";
      document.getElementById("timeUpSound").play();
      showTimeUp();
      return;
    }
    countdown.textContent = timeLeft;
  }, 1000);
}

// Automatically show the Instructions modal when the page loads
window.onload = function () {
  showInstructions();
};

