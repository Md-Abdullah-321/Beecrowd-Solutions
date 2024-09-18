/**
 * Title: Simple Product
 * Description: Solution to Simple Product - Beecrowd problem 1004
 * Author: Md Abdullah
 * Date: 19/09/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

console.log(`PROD = ${A * B}`);