function getComputerChoice(){
    var randomNum = Math.floor(Math.random()*3)
    var computerChoice = "none"
    if (randomNum === 0) {
        computerChoice = "Paper"
    } else if (randomNum === 1) {
        computerChoice = "Rock"
    }else{
        computerChoice = "Scissors"
    }
    return computerChoice
}
function getPlayerChoice() {
    var playerChoice = prompt("Bla")
    var firstChar= playerChoice.slice(0,1)
    firstChar = firstChar.toUpperCase()
    var restChar = playerChoice.slice(1,playerChoice.length)
    restChar = restChar.toLowerCase()
    playerChoice = firstChar+restChar
    return playerChoice
}
    var computerSelection = getComputerChoice()
    var playerSelection = getPlayerChoice()
console.log(computerSelection)
console.log(playerSelection)