function calcularVelocidade(distPercorrida, tempo) {
    const velocidadeKmPorHora = (distPercorrida / tempo) * 3.6;
    return velocidadeKmPorHora;
}

const distPercorrida = 500;
const tempo = 10;

const velocidade = calcularVelocidade(distPercorrida, tempo);
console.log("A velocidade é de " + velocidade + " km/h");