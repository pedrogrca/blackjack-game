let cards = [];
let cardsDealer = [];
let isAlive = false;
let sum = 0;
let hasBlackJack = false;
let message = undefined;
let player = {
    name: "Pedro",
    chips: 150
}


let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let newCardButton = document.getElementById("newCard");
let startGameButton = document.getElementById("startGame");
let newGameMessage = document.getElementById("newGameMessage");
let newGameButton = document.getElementById("newGameButton");
let standButton = document.getElementById("standButton");
let dealer = document.getElementById("dealer");
let dealerCards = document.getElementById("dealerCards");
let dealerCardsSum = document.getElementById("dealerCardsSum")
let playerEl = document.getElementById("player");



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
    newGameMessage.textContent = "Gostaria de jogar novamente?";
    newGameButton.style.display = "block";
    newGameButton.textContent = "JOGAR NOVAMENTE"
    newCardButton.style.display = "none";
    standButton.style.display = "none";
    } else if (sum > 21) {
    message = "Você estourou, perdeu!";
    isAlive = false;
    newGameMessage.textContent = "Gostaria de jogar novamente?";
    newGameButton.style.display = "block";
    newGameButton.textContent = "JOGAR NOVAMENTE"
    newCardButton.style.display = "none";
    standButton.style.display = "none";
    } else {
    message = "Você ganhou, parabéns!";
    isAlive = true;
    newGameMessage.textContent = "Gostaria de jogar novamente?";
    newGameButton.style.display = "block";
    newGameButton.textContent = "JOGAR NOVAMENTE"
    newCardButton.style.display = "none";
    standButton.style.display = "none";

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
    let dealerSum = cardsDealer.reduce((a, b) => a + b, 0);
    newCardButton.style.display = "none";
    standButton.style.display = "none";
    let secondDealerCard = getRandomCard();
    cardsDealer.push(secondDealerCard)
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
    console.log(`Soma Player: ${sum}`)
    console.log(`Soma Dealer: ${dealerSum}`)
    dealerCardsSum.textContent = dealerSum;
    if (dealerSum === 21) {
        messageEl.textContent = "A banca conseguiu BlackJack, você Perdeu!"
        newGameMessage.textContent = "Gostaria de jogar novamente?";
        newGameButton.style.display = "block";
        newGameButton.textContent = "JOGAR NOVAMENTE"
        newCardButton.style.display = "none";
        standButton.style.display = "none";
    } else if (dealerSum > 21) {
        messageEl.textContent = "A banca estourou, você venceu!"
        newGameMessage.textContent = "Gostaria de jogar novamente?";
        newGameButton.style.display = "block";
        newGameButton.textContent = "JOGAR NOVAMENTE"
        newCardButton.style.display = "none";
        standButton.style.display = "none";
    } else if (dealerSum > sum && dealerSum < 21 && sum < 21) {
        messageEl.textContent = "Você perdeu!"
        newGameMessage.textContent = "Gostaria de jogar novamente?";
        newGameButton.style.display = "block";
        newGameButton.textContent = "JOGAR NOVAMENTE"
        newCardButton.style.display = "none";
        standButton.style.display = "none";
    }
    else if (dealerSum === sum) {
        messageEl.textContent = "Empate!"
        newGameMessage.textContent = "Gostaria de jogar novamente?";
        newGameButton.style.display = "block";
        newGameButton.textContent = "JOGAR NOVAMENTE"
        newCardButton.style.display = "none";
        standButton.style.display = "none";
     
    } else if (dealerSum < 21 && dealerSum < sum) {
        messageEl.textContent = "Você Venceu!"
        newGameMessage.textContent = "Gostaria de jogar novamente?";
        newGameButton.style.display = "block";
        newGameButton.textContent = "JOGAR NOVAMENTE"
        newCardButton.style.display = "none";
        standButton.style.display = "none";
    }
}
