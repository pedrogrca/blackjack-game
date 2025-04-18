let cards = [];
let cardsDealer = [];
let isAlive = false;
let sum = 0;
let hasBlackJack = false;
let message = undefined;
// let player = {
//     name: "Pedro",
//     chips: 150
// }


const sumEl = document.getElementById("sum-el");
const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const newCardButton = document.getElementById("newCard");
const startGameButton = document.getElementById("startGame");
const newGameMessage = document.getElementById("newGameMessage");
const newGameButton = document.getElementById("newGameButton");
const standButton = document.getElementById("standButton");
const dealer = document.getElementById("dealer");
const dealerCards = document.getElementById("dealerCards");
const dealerCardsSum = document.getElementById("dealerCardsSum")
const playerEl = document.getElementById("player");



window.onload = newCardButton.style.display = "none";
window.onload = newGameButton.style.display = "none";
window.onload = standButton.style.display = "none";
window.onload = dealer.style.display = "none";
window.onload = dealerCards.style.display = "none";


// Display player chips and name (still W.I.P)
// playerEl.textContent = player.name + ": $" +  player.chips;



function startGame() {
    isAlive = true;
    hasBlackJack = false;
    dealer.style.display = "inline";
    dealerCards.style.display = "inline";
    cardsDealer = [];
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    startGameButton.style.display = "none";
    renderGame();
    playMusic();
    dealerGame();
}

function newGameOption() {
    newGameMessage.textContent = "Gostaria de jogar novamente?";
    newGameButton.style.display = "block";
    newGameButton.textContent = "JOGAR NOVAMENTE"
    newCardButton.style.display = "none";
    standButton.style.display = "none";
}

function renderGame() {
    cardsEl.textContent = "Cartas: ";
    newCardButton.style.display = "block";
    standButton.style.display = "block";
    newGameButton.style.display = "none";
 


    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "Soma: " + sum;

    if (sum <= 20) {
    message = "Gostaria de puxar uma nova carta?";
    } else if (sum === 21) {
    message = "Parabéns, você conseguiu Blackjack!";
    hasBlackJack = true;
    newGameOption()
    } else if (sum > 21) {
    message = "Você estourou, perdeu!";
    isAlive = false;
    newGameOption()
    } else {
    message = "Você ganhou, parabéns!";
    isAlive = true;
    newGameOption()
    }


messageEl.textContent = message;

}

function playAgain() {
    newGameMessage.textContent = "";
    dealerCards.textContent = "";
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

// quando começar o jogo, o dealer puxará uma carta aleátoria e será exibida na tela
// se o player escolher parar de puxar cartas, o dealer puxará mais uma carta
//o vencedor será decidido por quem chegar mais perto de 21.


function stand() {
    newCardButton.style.display = "none";
    standButton.style.display = "none";
    dealerCards.textContent = "Cartas: " + cardsDealer + " ";
    newDealerCard();
    checkWinner();
}


function dealerGame() {
    
    let dealerSum = cardsDealer.reduce((a, b) => a + b, 0);
    let firstDealerCard = getRandomCard();
    cardsDealer.push(firstDealerCard)
    dealerCards.textContent = "Cartas: " + cardsDealer + " ";
    dealerCardsSum.textContent = firstDealerCard + dealerSum;

}

function newDealerCard() {
    let dealerSum = cardsDealer.reduce((a, b) => a + b, 0);
    if (isAlive === true && hasBlackJack === false){
        let dealerCard = getRandomCard();
        dealerSum += dealerCard;
        cardsDealer.push(dealerCard);
        renderGame();
        }
}

function checkWinner() {
    let dealerSum = cardsDealer.reduce((a, b) => a + b, 0);
    dealerCards.textContent = `Cartas: ${cardsDealer}`;
    dealerCardsSum.textContent = dealerSum;
    if (dealerSum === 21) {
        messageEl.textContent = "A banca conseguiu BlackJack, você Perdeu!"
        newGameOption()
    } else if (dealerSum > 21) {
        messageEl.textContent = "A banca estourou, você venceu!"
        newGameOption()
    } else if (dealerSum > sum && dealerSum < 21 && sum < 21) {
        messageEl.textContent = "Você perdeu!"
        newGameOption()
    }
    else if (dealerSum === sum) {
        messageEl.textContent = "Empate!"
        newGameOption()
     
    } else if (dealerSum < 21 && dealerSum < sum) {
        messageEl.textContent = "Você Venceu!"
        newGameOption()
    }
}
