const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

let inputArray = input.split('\n');

let alphabetDict = {}
for (i = 97; i <= 122; i++) {
    alphabetDict[String.fromCharCode(i)] = i-96;
}

for (i = 65; i <= 90; i++) {
    alphabetDict[String.fromCharCode(i)] = i-64+26;
}
function part1() {
    let scoreTotal = 0;

    inputArray.forEach(sack => {
        let index = Math.floor(sack.length/2)
        
        let content = [sack.slice(0, index).split(""), sack.slice(index).split("")];

        const filteredArray = content[0].filter(value => content[1].includes(value));

        let list = new Set(filteredArray);
        console.log(String(...list))
        let score = alphabetDict[String(...list)]

        scoreTotal+=score;
        //console.log("Score: "+score)
    });
    
    console.log("Score total: "+scoreTotal)
}

let score = 0;

for (let i = 0; i < inputArray.length; i+=3) {
    //let string = inputArray[i]+inputArray[i+1]+inputArray[i+2]
    let arr = [inputArray[i].split(""), inputArray[i+1].split(""), inputArray[i+2].split("")]
    
    //console.log(arr)

    let aa = arr.shift().filter(function(v) {
        return arr.every(function(a) {
            return a.indexOf(v) !== -1;
        });
    });
    //console.log(string)
    console.log(String(...new Set(aa)))

    score+=alphabetDict[String(...new Set(aa))]
    
}

console.log("Score total: "+score)