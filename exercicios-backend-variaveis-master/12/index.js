var M = 90000;
var C = 60000;
var n = 24;

var i = Math.pow(M / C, 1 / n) - 1;

var taxaJurosPercentual = i * 100;

console.log("Taxa de juros mensal: " + taxaJurosPercentual.toFixed(2) + "%");