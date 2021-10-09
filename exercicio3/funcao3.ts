function sortearNumeros(...numeros: number[]): { pares: number[], impars: number[] } {

    return {
        pares: numeros.filter(numero => numero % 2 === 0),
        impars: numeros.filter(numero => numero % 2 === 1)
    }
}

console.log(sortearNumeros(1, 2, 3, 4, 5, 6))