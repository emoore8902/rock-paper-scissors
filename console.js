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
function Round(playerSelection, computerSelection){
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
}
function buttonControl(playerSelection){

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
rockBtn.addEventListener('click', () => buttonControl('ROCK'));
paperBtn.addEventListener('click', () => buttonControl('PAPER'));
scissorsBtn.addEventListener('click', () => buttonControl('SCISSORS'));