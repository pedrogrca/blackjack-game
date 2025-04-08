let firstCard = 10;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = undefined;

if (sum <= 20) {
    message = "Gostaria de puxar uma nova carta?";
} else if (sum === 21) {
    message = "Parabéns, você ganhou!";
    hasBlackJack = true;
} else {
    message = "Você Perdeu!";
    isAlive = false;
}


console.log(message);