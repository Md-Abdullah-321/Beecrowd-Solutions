/**
 * Title: Distance Between Points
 * Description: 
 * Author: Md Abdullah
 * Date: 09/11/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const x1 = parseFloat(lines[0]);
const y1 = parseFloat(lines[1]);
const x2 = parseFloat(lines[2]);
const y2 = parseFloat(lines[3]);

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distance.toFixed(4));