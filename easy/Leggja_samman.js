const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');
const lines = input.trim().split('\n');
const [a, b] = lines;

console.log(Number(a) + Number(b))