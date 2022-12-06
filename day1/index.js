const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

let inputArray = input.split('\n\n');

inputArray = inputArray.map((str) => str.split('\n'));

let results = [];

inputArray.forEach(elfCalories => {
    let count = 0;
    elfCalories.forEach(calories => {
        count+=parseInt(calories);
    })
    results.push(count);
})

results.sort((a,b) => a-b)
console.log("Part 1: " + results[results.length-1]);

let sum = results[results.length-1] + results[results.length-2] + results[results.length-3];
console.log("Part 2 (top 3): " + sum);