function computerPlay() {

    let x = Math.floor((Math.random() * 3) + 1);
    // console.log("X = " + x)

    if (x == 1) {
        return "Rock"
    } else if (x == 2) {
        return "Scizzor"
        // console.log("S")
    } else if (x == 3) {
        return "Paper"
    }
    else {
        computerPlay();
    }

}