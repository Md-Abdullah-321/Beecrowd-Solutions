/**
 * Title: Salary
 * Description: Solution to Salary - Beecrowd problem 1008
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


const employeeNumber = parseInt(lines[0]);
const hours = parseInt(lines[1]);
const salary = parseFloat(lines[2]);

const totalSalary = hours * salary;

console.log(`NUMBER = ${employeeNumber}`);
console.log(`SALARY = U$ ${totalSalary.toFixed(2)}`);
