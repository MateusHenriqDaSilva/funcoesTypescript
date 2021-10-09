// const adicionarDoisNumeros = (a: number, b: number): number => a + b
// console.log(adicionarDoisNumeros(3, 4))

const adicionarDoisNumeros = (a: number): ((b: number) => number) => {
    return (b: number): number => {
        return a + b
    }
}

const addFuncao = adicionarDoisNumeros(3)
console.log(addFuncao(4))