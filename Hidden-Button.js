let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let buttonGenerator = document.getElementById("buttonGener");
let randomNumber;

function gnrRndNmbTill3() {
   randomNumber = Math.floor(Math.random() * 3) + 1;
}

let randomNumberGenerator, buttons_amount, three = 3;

function user_input() {
   buttons_amount = prompt("Enter the amount of buttons that you need");
   if (buttons_amount != null) {
      let guessed_buttons = [];
      let buttonsContainer = document.getElementById("buttonsContainer");
      for (let i = 1; i <= buttons_amount; i++) {
         let button = document.createElement("button");
         ++three;
         button.id = "button" + three;
         button.innerHTML = "Button " + three;
         button.onclick = winner_or_not;
         guessed_buttons.push(button);
         buttonsContainer.appendChild(button);
      }
      randomNumberGenerator = Math.floor(Math.random() * buttons_amount) + 4;
   }
}

function winner_or_not(e) {
   let clickedButton = e.target;
   let clickedButtonNumber = parseInt(clickedButton.id.replace("button", ""));
   if (clickedButtonNumber === randomNumber && clickedButtonNumber <= 3) {
      alert("castigator");
   } else if (clickedButtonNumber !== randomNumber && clickedButtonNumber <= 3) {
      alert("necastigator");
   }
   if (clickedButtonNumber === randomNumberGenerator && clickedButtonNumber > 3) {
      alert("castigator");
   } else if (clickedButtonNumber !== randomNumberGenerator && clickedButtonNumber > 3) {
      alert("necastigator");
   }
}
window.onload = gnrRndNmbTill3;
