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
    
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var computerSelection = getComputerChoice()
        var playerSelection = this.textContent
        
        if (playerScore<5 && computerScore<5) {
        if (computerSelection===playerSelection) {
            document.querySelector(".title").textContent = "Draw!"
        } else if (computerSelection === "Rock" && playerSelection === "Paper") {
            document.querySelector(".title").textContent = "You win! Paper beats Rock."
            playerScore++
        }else if(computerSelection==="Rock" && playerSelection=== "Scissors"){
            document.querySelector(".title").textContent = "You lose! Rock beats Scissors."
            computerScore++
        }else if(computerSelection==="Paper" && playerSelection==="Scissors"){
            document.querySelector(".title").textContent = "You win! Scissors beat Rock."
            playerScore++
        }else if (computerSelection==="Paper"&&playerSelection==="Rock"){
            document.querySelector(".title").textContent = "You lose! Paper beats Rock."
            computerScore++
        }else if(computerSelection==="Scissors"&&playerSelection==="Paper"){
            document.querySelector(".title").textContent = "You lose! Scissors beat Paper."
            computerScore++
        }else if(computerSelection==="Scissors"&&playerSelection==="Rock") {
            document.querySelector(".title").textContent = "You win! Rock beats Scissors."
            playerScore++
        }  
    }
    else if(computerScore===5){
        document.querySelector(".title").textContent = "Game over."
        computerScore= 0
        playerScore=0
    }else if(playerScore===5){
        document.querySelector(".title").textContent = "You win! Match over."
        computerScore= 0
        playerScore=0
    }

console.log(playerScore)
        

    })
}