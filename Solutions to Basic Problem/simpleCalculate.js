/**
 * Title: Simple Calculate
 * Description: Simple Calculate -  Beecrowd Solution with JS
 * Author: Md Abdullah
 * Date: 17/10/2024
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const splittedStrOne = parseInt(lines[0]).split(' ');
const productQuantityOne = splittedStrOne[1];
const productPriceOne = splittedStrOne[2];

const splittedStrTwo = parseInt(lines[1]).split(' ');
const productQuantityTwo = splittedStrTwo[1];
const productPriceTwo = splittedStrTwo[2];

const result = (productQuantityOne * productPriceOne) + (productQuantityTwo * productPriceTwo);
console.log(`VALOR A PAGAR: R$ ${result.toFixed(2)}`)