/**
 * Title: Average Two
 * Description: Solution to Average Two - Beecrowd problem 1006
 * Author: Md Abdullah
 * Date: 19/09/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);

const result = ((A * 2) + (B * 3) + (C * 5)) / 10;
console.log(`MEDIA = ${result.toFixed(1)}`);