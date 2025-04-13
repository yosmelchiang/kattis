const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');
const int = Number(input)

const result = (int + 5) * 3 - 10

console.log(result)

// const addFive = int + 5
// const triple = addFive * 3
// const result = triple - 10


