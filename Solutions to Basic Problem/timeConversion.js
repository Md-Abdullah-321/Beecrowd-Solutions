/**
 * Title: Time Conversion
 * Description: Time conversion - Beecrowd problem 1015
 * Author: Md Abdullah
 * Date: 09/02/2025
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 

let seconds = parseInt(lines[0]);

const hours = Math.floor(seconds / 3600);
seconds %= 3600;

const minutes = Math.floor(seconds / 60);
seconds %= 60;

console.log(`${hours}:${minutes}:${seconds}`);
