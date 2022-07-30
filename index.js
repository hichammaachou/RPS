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

    
    var playerScore = 0
    var computerScore = 0
if (playerScore<5 && computerScore<5) {
    for (let i = 0; i < document.querySelectorAll("button").length; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        var computerSelection = getComputerChoice()
        var playerSelection = this.textContent
    if (computerSelection===playerSelection) {
        document.querySelector(".title").textContent = "Draw!"
    } else if() {
        document.querySelector(".title").textContent = "traw!"
    }    
        }
        )}
    
    
 }