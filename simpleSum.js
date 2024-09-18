/**
 * Title: Simple Sum
 * Description: Solution to Simple Sum - Beecrowd problem 1003
 * Author: Md Abdullah
 * Date: 19/09/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

console.log(`SOMA = ${A + B}`);