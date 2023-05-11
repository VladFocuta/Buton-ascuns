let buttons = document.querySelectorAll("button");
let randomNumber;

function genRandomNumber() {
   randomNumber = Math.floor(Math.random() * 3) + 1;
}

let buttonsAmount, count = 3;

function getButtons() {
   buttonsAmount = prompt("Enter the amount of buttons that you need");
   if (buttonsAmount != null) {
      let buttonsContainer = document.getElementById("buttonsContainer");
      for (let i = 1; i <= buttonsAmount; i++) {
         let button = document.createElement("button");
         button.id = "button" + ++count;
         button.innerHTML = "Button " + count;
         button.onclick = winnerOrNot;
         buttonsContainer.appendChild(button);
      }
      if (buttonsAmount > 0) {
         randomNumber = Math.floor(Math.random() * buttonsAmount) + 4;
      }
   }
}

function winnerOrNot(e) {
   let clickedButton = e.target;
   let clickedButtonNumber = parseInt(clickedButton.id.replace("button", ""));
   if (clickedButtonNumber === randomNumber) {
      alert("castigator");
   } else {
      alert("necastigator");
   }
}
window.onload = genRandomNumber;
