let playerPoints = 0;
let computerPoints = 0;
let roundWinner = '';
let computerSelection = '';

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
    updateResults(roundWinner, playerPoints, computerPoints, playerSelection);
}

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerScorePara = document.getElementById('playerPoints');
const computerScorePara = document.getElementById('computerPoints');

rockBtn.addEventListener('click', () => buttonControl('ROCK'));
paperBtn.addEventListener('click', () => buttonControl('PAPER'));
scissorsBtn.addEventListener('click', () => buttonControl('SCISSORS'));

function buttonControl(playerSelection){
    if (playerPoints === 5 || computerPoints === 5){
        return;
    } else {
        computerSelection = computerPlay();
        Round(playerSelection, computerSelection);
    }
}

function updateResults(roundWinner, playerPoints, computerPoints, playerSelection){
    playerScorePara.textContent = 'Player:' + playerPoints;
    computerScorePara.textContent = 'Computer: ' + computerPoints;
    if (roundWinner == 'tie'){
        scoreInfo.textContent = 'It\'s a tie!';
        scoreMessage.textContent = playerSelection + ' ties with ' + computerSelection;
    } else if (roundWinner == 'player') {
        scoreInfo.textContent = 'Player wins!';
        scoreMessage.textContent = playerSelection + ' beats ' + computerSelection;
    } else if (roundWinner == 'computer') {
        scoreInfo.textContent = "Computer wins!";
        scoreMessage.textContent = playerSelection + ' is beaten by ' + computerSelection;
    }
}