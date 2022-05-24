function computerPlay(){
    let RandomNumber = Math.floor(Math.random() * 4);
    if (RandomNumber === 0){
        return "Rock";
    } else if (RandomNumber == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
function GameTime(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie Round!";
    } else if (playerSelection == "rock"){
        if(computerSelection == "Scissors"){
            return "Player wins! Computers suck!"
        } else {
            return "Computer wins! You suck!"
        }
    } else if (playerSelection == "scissors"){
        if(computerSelection == "Paper"){
            return "Player wins! Computers suck!"
        } else {
            return "Computer wins! You suck!"
        }
    } else if (playerSelection == "paper"){
        if(computerSelection == "Rock"){
            return "Player wins! Computers suck!"
        } else {
            return "Computer wins! You suck!"
        }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(GameTime(playerSelection,computerSelection));