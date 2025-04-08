let firstCard = 8;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = undefined;

let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    if (sum <= 20) {
    message = "Gostaria de puxar uma nova carta?";
    } else if (sum === 21) {
    message = "Parabéns, você ganhou!";
    hasBlackJack = true;
    } else {
    message = "Você Perdeu!";
    isAlive = false;
    }

cardsEl.textContent = "Cartas: " + firstCard + " " + secondCard
sumEl.textContent = "Soma: " + sum;
messageEl.textContent = message;

}

function newCard() {
    console.log("Nova carta puxada!")
}

