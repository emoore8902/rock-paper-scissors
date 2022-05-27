let playerPoints = 0;
let computerPoints = 0;
let roundWinner = '';

function computerPlay(){
    let RandomNumber = Math.floor(Math.random() * 4);
    if (RandomNumber === 0){
        return "ROCK";
    } else if (RandomNumber == 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}
function Round(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        roundWinner = 'tie';
    } else if (playerSelection == "ROCK"){
        if(computerSelection == "SCISSORS"){
            playerPoints ++;
            roundWinner = 'player';
        } else {
            computerPoints ++;
            roundWinner = 'computer';
        }
    } else if (playerSelection == "SCISSORS"){
        if(computerSelection == "PAPER"){
            playerPoints ++;
            roundWinner = 'player';
        } else {
            computerPoints ++;
            roundWinner = 'computer';
        }
    } else if (playerSelection == "PAPER"){
        if(computerSelection == "ROCK"){
            playerPoints ++;
            roundWinner = 'player';
        } else {
            computerPoints ++;
            roundWinner = 'computer';
        }
    }
    updateResults(roundWinner, playerPoints, computerPoints);
}


const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const playerScorePara = document.getElementById('playerPoints')
const computerScorePara = document.getElementById('computerPoints')

rockBtn.addEventListener('click', () => buttonControl('ROCK'));
paperBtn.addEventListener('click', () => buttonControl('PAPER'));
scissorsBtn.addEventListener('click', () => buttonControl('SCISSORS'));

function buttonControl(playerSelection){
    let computerSelection = computerPlay();
    Round(playerSelection, computerSelection);
}

function updateResults(roundWinner, playerPoints, computerPoints){
    playerScorePara.textContent = 'Player:' + playerPoints;
    computerScorePara.textContent = 'Computer: ' + computerPoints;
}
/*
function GameTime(){
    let playerPoints = 0, computerPoints = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt();
        let computerSelection = computerPlay();
        let result = Round(playerSelection.toLowerCase(), computerSelection);
        if (result == "Player wins! Computers suck!"){
            playerPoints = playerPoints + 1;
            console.log("Player wins! Current score is player:" + playerPoints + " computer:" + computerPoints);
        } else if (result == "Computer wins! You suck!"){
            computerPoints = computerPoints + 1;
            console.log("Computer wins! Current score is player:" + playerPoints + " computer:" + computerPoints);
        } else if (result == "Tie Round!") {
            console.log("Tie Round! Current score is player:" + playerPoints + " computer:" + computerPoints);
        }
    }
} 
GameTime(); */