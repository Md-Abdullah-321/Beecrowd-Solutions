/**
 * Title: Average One
 * Description: Solution to Average One - Beecrowd problem 1005
 * Author: Md Abdullah
 * Date: 19/09/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const result = ((A * 3.5) + (B * 7.5)) / 11;

console.log(`MEDIA = ${result.toFixed(5)}`);