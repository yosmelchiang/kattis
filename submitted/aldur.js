// First line consists of a single integer n, the number of friends Tomas has
// Following n lines are the age of the friends

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');
const lines = input.trim().split('\n').map(s => +s);
const [ f, ...ages ] = lines // Can use f as n but we are just going to go off ages.length

let youngest = ages[0]; // Assume the first age is the youngest

// Initialize i at index 1
for(let i = 1; i < ages.length; i++) {
  // Check that if the i is less than youngest, re-assign youngest with i
  if(ages[i] < youngest)
    youngest = ages[i];
}

console.log(youngest)