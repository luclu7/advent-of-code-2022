const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

let inputArray = input.split('\n');

inputArray = inputArray.map((str) => str.split(' '));

const lost = 0;
const draw = 3;
const win = 6;

const corresp = {"A": 1, "B": 2, "C": 3}

part1();
part2();

function part1() {
    let score = 0;

    inputArray.forEach(element => {
        const opponent = element[0]
        const me = element[1]

        let pts = points1(opponent, me)

        pts += translatePlay(me);

        //console.log(`${translateInput(opponent)} vs ${translateInput(me)}: ${pts}`)

        score += pts;
    });

    console.log("Total score: "+score)
}

function part2() {
    let score = 0;

    inputArray.forEach(element => {
        const opponent = element[0]
        const me = element[1]

        let pts = points2(opponent, me)
    
        score += pts;
    });

    console.log("Total score part 2: "+score)
}

function points1(playA, playB) {
    let A = translateInput(playA);
    let B = translateInput(playB)
    
    if(A == B) {
        return draw
    }

    if(isWin(A, B)) {
        return win
    }

    return lost
}



function points2(playA, type) {
    let me = getMove(playA, type);

    let score = corresp[me];
    switch(type) {
        case "X":
            score+=lost;
            break;
        case "Y":
            score+=draw;
            break;
        case "Z":
            score+=win;
            break
    }

    return score

}

function isWin(A, B) {
    return A == "Scissors" && B == "Rock" || A == "Paper" && B == "Scissors" || A == "Rock" && B == "Paper"
}

function getMove(opponentMove, type) {
    //console.log(`move: ${opponentMove} . Type: ${type}`)
    if(type == "X") { // loose
        switch(opponentMove) {
            case "C":
                return "B"
            case "A":
                return "C"
            case "B":
                return "A"
        }
    } else if (type == "Y") { // draw
        return opponentMove
    } else {
        switch(opponentMove) {
            case "C":
                return "A"
            case "A":
                return "B"
            case "B":
                return "C"
        }
    }
}

function translateInput(input) {
    switch(input) {
        case "A":
            return "Rock"
        case "B":
            return "Paper"
        case "C":
            return "Scissors"
        

        case "X":
            return "Rock"
        case "Y":
            return "Paper"
        case "Z":
            return "Scissors"
            
    }
}

function translatePlay(input) {
    switch(input) {
        case "A":
            return 1
        case "B":
            return 2
        case "C":
            return 3

        case "X":
            return 1
        case "Y":
            return 2
        case "Z":
            return 3
            
    }
    
}