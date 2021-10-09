const matriz1 = [7, 6, 8, 9, 2, 25]
const matriz2 = [6, 8, 9, 2, 25]
const matriz3 = [6, 8, 9, 2, 25, 7]

function compararMatrizes(valores1: number[], valores2: number[]): boolean {
    if (valores1.length !== valores2.length) {
        return false
    }
    valores1.sort()
    valores2.sort()
    for (let contador = 0; contador < valores1.length; contador++) {
        if (valores1[contador] !== valores2[contador]) {
            return false
        }
    }
    return true
}

console.log(
    ` a matriz 1: ${matriz1} é igual a ${matriz2} ?`, compararMatrizes(matriz1, matriz2)
)

console.log(
    ` a matriz 1: ${matriz2} é igual a ${matriz3} ?`, compararMatrizes(matriz1, matriz2)
)