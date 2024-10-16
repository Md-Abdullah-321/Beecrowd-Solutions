/**
 * Title: Sphare
 * Description: Sphare - Beecrowd Solution with JS
 * Author: Md Abdullah
 * Date: 17/10/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const R = parseFloat(lines[0]);
const area = (4/3) * 3.14159 * Math.pow(R, 2);

console.log(`VOLUME = ${area.toFixed(3)}`)