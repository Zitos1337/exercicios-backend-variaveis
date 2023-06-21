const capitalInicial = 60000;
const montante = 90000;
const numeroDeMeses = 24;
const taxaDeJuros = Math.pow(montante / capitalInicial, 1 / numeroDeMeses) - 1

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros}% pois após 24 meses você teve que pagar 90000 reais`);