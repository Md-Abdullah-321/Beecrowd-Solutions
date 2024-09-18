/**
 * Title: Area of a Circle
 * Description: Solution to Area of a Circle - Beecrowd problem 1002
 * Author: Md Abdullah
 * Date: 19/09/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
const R = parseFloat(lines[0]);
const area = pi * Math.pow(R, 2);

console.log(`A=${area.toFixed(4)}`);