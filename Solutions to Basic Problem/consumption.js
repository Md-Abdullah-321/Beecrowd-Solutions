/**
 * Title: Consumption
 * Description: Calculate the Consumption - Beecrowd problem 1014
 * Author: Md Abdullah
 * Date: 09/11/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const totalDistance = parseInt(lines[0]);
const totalFuel = parseFloat(lines[1]);

console.log(`${(totalDistance / totalFuel).toFixed(3)} km/l`);