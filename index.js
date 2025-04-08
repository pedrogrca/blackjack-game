let cards = [];
let isAlive = false;
let sum = 0;
let hasBlackJack = false;
let message = undefined;

let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let newCardButton = document.getElementById("newCard");
let startGameButton = document.getElementById("startGame");
let newGameMessage = document.getElementById("newGameMessage");
let newGameButton = document.getElementById("newGameButton");
let dealer = document.getElementById("dealer");
let dealerCards = document.getElementById("dealerCards");



window.onload = newCardButton.style.display = "none";
window.onload = newGameButton.style.display = "none";
window.onload = dealer.style.display = "none";
window.onload = dealerCards.style.display = "none";



function startGame() {
    isAlive = true;
    hasBlackJack = false;
    dealer.style.display = "inline";
    dealerCards.style.display = "inline";
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    startGameButton.style.display = "none";
    renderGame();
    playMusic();
}

function renderGame() {
    cardsEl.textContent = "Cartas: ";
    newCardButton.style.display = "block";
    newGameButton.style.display = "none";


    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " , "
    }

    sumEl.textContent = "Soma: " + sum;

    if (sum <= 20) {
    message = "Gostaria de puxar uma nova carta?";
    } else if (sum === 21) {
    message = "Parabéns, você ganhou!";
    hasBlackJack = true;
    newGameMessage.textContent = "Gostaria de jogar novamente?";
    newGameButton.style.display = "block";
    newGameButton.textContent = "JOGAR NOVAMENTE"
    newCardButton.style.display = "none";
    } else {
    message = "Você Perdeu!";
    isAlive = false;
    newGameMessage.textContent = "Gostaria de jogar novamente?";
    newGameButton.style.display = "block";
    newGameButton.textContent = "JOGAR NOVAMENTE"
    newCardButton.style.display = "none";
    }


messageEl.textContent = message;

}

function playAgain() {
    newGameMessage.textContent = "";
    startGame();
}

function playMusic() {
    const audio = document.getElementById("playMusic")
    audio.play();
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
