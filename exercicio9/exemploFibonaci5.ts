const fibonaci1 = () => {
    let proximo = 0
    let incremementar = 1
    let corrente = 0
    return () => {
        [corrente, proximo, incremementar] = [proximo, incremementar, proximo + incremementar]
        return corrente
    }
}
const pegarProximo4 = fibonaci1()
const pegarMaisFibonaci = fibonaci1()
for (let contador = 0; contador < 10; contador++) {
    console.log(pegarProximo4())
}
for (let contador = 0; contador < 10; contador++) {
    console.log(pegarMaisFibonaci())
}