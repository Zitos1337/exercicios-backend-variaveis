//c = capital
const capital = 1000;
//i = taxa fixa de juros
const taxa = 0.125;
//tempo de juros
const tempo = 5;

const montante = capital * Math.pow(1 + taxa, tempo);

console.log(montante);