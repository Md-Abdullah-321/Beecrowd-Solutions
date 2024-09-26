/**
 * Title: Difference
 * Description: Solution to Difference - Beecrowd problem 1007
 * Author: Md Abdullah
 * Date: 27/09/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */


const X = parseInt(lines[0]);
const Y = parseInt(lines[1]);
const A = parseInt(lines[2]);
const B = parseInt(lines[3]);

console.log(`DIFERENCA = ${X * Y - A * B}`);