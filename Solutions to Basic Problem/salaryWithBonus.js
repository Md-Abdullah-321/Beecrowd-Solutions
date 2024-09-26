/**
 * Title: Salary With Bonus
 * Description: Solution to Salary With Bonus - Beecrowd problem 1009
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

const name = lines[0];
const salary = parseFloat(lines[1]);
const sales = parseFloat(lines[2]);

const bonus = sales * 0.15;
const totalSalary = salary + bonus;

console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
