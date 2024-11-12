/**
 * Title: Fuel Consumption
 * Description: Calculate the Fuel Consumption - Beecrowd problem 1017
 * Author: Md Abdullah
 * Date: 12/11/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const totalDistance = parseInt(lines[0]);
const totalFuel = parseFloat(lines[1]);

console.log(`${(totalDistance / totalFuel).toFixed(3)} km/l`);