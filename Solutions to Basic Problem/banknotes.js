/**
 * Title: Consumption
 * Description: Calculate the Consumption - Beecrowd problem 1014
 * Author: Md Abdullah
 * Date: 04/02/2025
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let money = parseInt(lines[0]);
console.log(money);

const notes = [100, 50, 20, 10, 5, 2, 1];
for(let note of notes){
    const count = Math.floor(money / note);
    console.log(`${count} nota(s) de R$ ${note},00`);
    money %= note;
}