import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8');

let pairs = input.split('\n');

let counter = 0;

pairs.forEach(pair => {
    let test = new Array(100).fill(0)

    const ranges = pair.split(",")

    ranges.forEach(range => {
        let numbers = range.split("-")
        //console.log(`numbers: ${numbers[0]} - ${numbers[1]}`)
        let nbs = getNumbers(parseInt(numbers[0]), parseInt(numbers[1]))

        let str = ""
        for (let i = 0; i < test.length; i++) {
            if(nbs.includes(i)) {
                str+="*"
            } else {
                str+="."
            }
        }
        str += " " + range
        //console.log(str)    

        nbs.forEach(id => {
            test[id]++;
        })

    })

    let str = ""
    for (let i = 0; i < test.length; i++) {
        switch(test[i]) {
            case 0:
                str+=" "
                break;
            case 1:
                str+="/"
                break;
            case 2:
                str+="#"
                break
        }
    }

    str += " " + pair
    //console.log(str)
    let isWithin = checkIfRangeIsWithin(ranges[0], ranges[1])

    if(isWithin) {
        counter++;
        console.log(pair)
    } else {
      //  console.log(chalk.blue("Not withint", pair))
    }
    //console.log("")
});

console.log("Counter: "+counter)

function checkIfRangeIsWithin(rangeA, rangeB) {
    let A = rangeA.split("-"); let B = rangeB.split("-")

    // i spent too much time for this
    let minA = parseInt(A[0]); let maxA = parseInt(A[1])
    let minB = parseInt(B[0]); let maxB = parseInt(B[1])
    
    /*console.log(`minA: ${minA} minB: ${minB}    minA >= minB: ${minA} >= ${minB}: ${minA >= minB} maxA <= maxB: ${maxA <= maxB}`)
    console.log(`maxA: ${maxA} maxB: ${maxB}    minB >= minA: ${minB} >= ${minA}: ${minB >= minA} maxB <= maxA: ${maxB <= maxA}`)
    */
    // for part 2
    if((minA <= maxB) && (maxA >= minB)) {
    
    //for part 1:
    //if((minA >= minB && maxA <= maxB) || (minB >= minA && maxB <= maxA)) {
        return true
    } else {
        return false
    }
}

function getNumbers(A, B) {
    if(A<B) {
        return range(A, B)
    } else {
        return range(B, A)
    }
}

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}