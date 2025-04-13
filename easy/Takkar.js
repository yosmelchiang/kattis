const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');
const lines = input.trim().split('\n')
const [a, b] = lines

Number(a) > Number(b) ? console.log('MAGA!') : Number(a) < Number(b) ? console.log('FAKE NEWS!') : console.log('WORLD WAR 3!')