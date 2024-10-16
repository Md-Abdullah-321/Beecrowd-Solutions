/**
 * Title: Area
 * Description: Area - Beecrowd Solution with JS
 * Author: Md Abdullah
 * Date: 17/10/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const splittedStr = lines[0].split(' ');
const A = parseFloat(splittedStr[0]);
const B = parseFloat(splittedStr[1]);
const C = parseFloat(splittedStr[2]);

const triangleArea = 0.5 * A * C;
const circleArea = 3.14159 * Math.pow(C, 2);
const trapeziumArea = (A + B) * C / 2;
const squareArea = Math.pow(B, 2);
const rectangleArea = A * B;

console.log(`TRIANGULO: ${triangleArea.toFixed(3)}`);
console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapeziumArea.toFixed(3)}`);
console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);

