let cards = [];
let isAlive = false;
let sum = 0;
let hasBlackJack = false;
let message = undefined;

let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cartas: ";

    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Soma: " + sum;
    if (sum <= 20) {
    message = "Gostaria de puxar uma nova carta?";
    } else if (sum === 21) {
    message = "Parabéns, você ganhou!";
    hasBlackJack = true;
    } else {
    message = "Você Perdeu!";
    isAlive = false;
    }


messageEl.textContent = message;

}


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10){
        return 10;
    } else {
        return randomNumber;
    }
        

}



function newCard() {
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    }
}
