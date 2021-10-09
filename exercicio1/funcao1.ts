const valores = [8, 42, 99, 161]
let total = 0

for (let contador = 0; contador < valores.length; contador++) {
    total += valores[contador]
}
const tirarMedia = total / valores.length
console.log(tirarMedia)

const calcularTudo = (valores: number[]): number =>
(valores.reduce((valorAtual, valorAcumulador) =>
    valorAtual + valorAcumulador, 0) / valores.length)

const valores2 = [8, 42, 99, 160]
console.log(calcularTudo(valores2))