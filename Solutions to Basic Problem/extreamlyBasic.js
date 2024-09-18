/**
 * Title: Extreamly Basic
 * Description: Solution to Extreamly Basic - Beecrowd problem 1001
 * Author: Md Abdullah
 * Date: 19/09/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

console.log(`X = ${A + B}`);