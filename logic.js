function computerPlay() {

    let x = Math.floor((Math.random() * 3) + 1);
    // console.log("X = " + x)

    if (x == 1) {
        return "Rock"
    } else if (x == 2) {
        return "scissor"
        // console.log("S")
    } else if (x == 3) {
        return "Paper"
    }
    else {
        computerPlay();
    }

}


function playRound(computerChoice , userChoice) {

    const cScore = document.querySelector('.compScore')
    const uScore = document.querySelector('.userScore')
    const newResult = document.querySelector('#new-result')

    c = computerChoice.toLowerCase()
    // console.log("comp choice: "+ c)
    u = userChoice.toLowerCase()
    // console.log("user choice: " + u)
    
    // User win cases
    if (c == 'rock' && u == 'paper') {
        newResult.innerText = 'User Wins'
        userScore += 1;
        console.log("You win")
    }
    else if (c == 'paper' && u == 'scissor') {
        newResult.innerText = 'User Wins'
        userScore += 1;
        console.log("You win")
    }
    else if (c == 'scissor' && u == 'rock') {
        newResult.innerText = 'User Wins'
        userScore += 1;
        // console.log("You win")
    }
    // Computer Win Cases
    else if (u == 'rock' && c == 'paper') {
        newResult.innerText = 'Computer Wins'
        computerScore += 1;
        console.log("You lose")
    }
    else if (u == 'paper' && c == 'scissor') {
        newResult.innerText = 'Computer Wins'
        computerScore += 1;
        console.log("You lose")
    }
    else if (u == 'scissor' && c == 'rock') {
        newResult.innerText = 'Computer Wins'
        computerScore += 1;
        // console.log("You lose")
    }
    else {
        newResult.innerText = 'Tie'
        // console.log("Tie")
    }

    // Update text
    cScore.innerText = computerScore;
    uScore.innerText = userScore;
}


function game(userInput) {
    const computer = computerPlay();
    console.log(userInput)
    let result = playRound(computer, userInput);

    const newResult = document.querySelector('#new-result')
    
    if (computerScore == 5) {
        computerScore = 0;
        userScore = 0
        newResult.innerText = "Computer Wins the tournament!"
    } 
    else if (userScore == 5) {
        computerScore = 0;
        userScore = 0
        newResult.innerText = "User Wins the tournament!"
    }

}

// make non global
let computerScore = 0;
let userScore = 0;

// rps-ui feature
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log("beep")
    if (button.id == 1) {
        game('rock');
    }
    else if (button.id == 2) {
        game('paper');
    }
    else if (button.id == 3) {
        game('scissor');
    }
    else {
        alert("Oops. Something went wrong!")
    }
  });
});



