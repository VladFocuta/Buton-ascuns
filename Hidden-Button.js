let buttons = document.querySelectorAll("button");
let randomNumber;

function gnrRndNmbTill3() {
   randomNumber = Math.floor(Math.random() * 3) + 1;
}

let randomNumberGenerator, buttons_amount, count = 3;

function user_input() {
   buttons_amount = prompt("Enter the amount of buttons that you need");
   if (buttons_amount != null) {
      let buttonsContainer = document.getElementById("buttonsContainer");
      for (let i = 1; i <= buttons_amount; i++) {
         let button = document.createElement("button");
         button.id = "button" + ++count;
         button.innerHTML = "Button " + count;
         button.onclick = winner_or_not;
         buttonsContainer.appendChild(button);
      }
      if (buttons_amount > 0) {
         randomNumber = Math.floor(Math.random() * buttons_amount) + 4;
      }
   }
}

function winner_or_not(e) {
   let clickedButton = e.target;
   let clickedButtonNumber = parseInt(clickedButton.id.replace("button", ""));
   if (clickedButtonNumber === randomNumber) {
      alert("castigator");
   } else {
      alert("necastigator");
   }
}
window.onload = gnrRndNmbTill3;
