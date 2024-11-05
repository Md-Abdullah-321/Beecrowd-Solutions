/**
 * Title: The Greatest
 * Description: Get the Greatest - Beecrowd problem 1013
 * Author: Md Abdullah
 * Date: 05/11/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);
const C = parseInt(lines[2]);


if (A > B && A > C) {
    console.log(`${A} eh o maior`);
}
else if (B > A && B > C) {
    console.log(`${B} eh o maior`);
}
else {
    console.log(`${C} eh o maior`);
}