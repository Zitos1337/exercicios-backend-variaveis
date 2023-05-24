function calcularDistancia(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return distancia;
}

const x1 = 1;
const y1 = 1;
const x2 = 1;
const y2 = 4;

const resultado = calcularDistancia(x1, y1, x2, y2);
console.log(resultado);
