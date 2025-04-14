/**
 * Input consists of 3 integers:
 * 1: v = velocity
 * 2: a = acceleration
 * 3: t = time
 * example: 0 3 3
 * formel: d = vt + 1/2*a*(t^2)
 * calc: (0*3) + (0,5*3*(3^2))
 */

const fs = require('fs');
const input = fs.readFileSync(process.stdin.fd, 'utf-8');
const [v, a, t] = input.split(' ').map(d => +d)

console.log((v*t) + (1/2 * a * (t**2)))

// Alternatively, use Math.pow
// console.log((v*t) + 1/2 * a * (Math.pow(t, 2)))