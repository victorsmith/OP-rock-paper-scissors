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


function playRound( computerChoice , userChoice) {
    

    c = computerChoice.toLowerCase()
    // console.log("comp choice: "+ c)
    u = userChoice.toLowerCase()
    // console.log("user choice: " + u)
    
    // User win cases
    if (c == 'rock' && u == 'paper') {
        return "You win"
    }
    else if (c == 'paper' && u == 'scissor') {
        return "You win"
    }
    else if (c == 'scissor' && u == 'rock') {
        return "You win"
    }
    // Computer Win Cases
    else if (u == 'rock' && c == 'paper') {
        return "You lose"
    }
    else if (u == 'paper' && c == 'scissor') {
        return "You lose"
    }
    else if (u == 'scissor' && c == 'rock') {
        return "You lose"
    }
    else {
        return "Tie"
    }
}


function game() {

    for (let x=0; x<5; x++) {
        console.log("Game: " + x)
        const computer = computerPlay()
        const user = prompt("Pick rock/paper/scissors")   

        let result = playRound(computer, user)
        console.log(result)
    }
}

