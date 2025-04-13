const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');
const age = Number(input)

if(age % 10 === 0) console.log('Jebb');
else
console.log('Neibb')