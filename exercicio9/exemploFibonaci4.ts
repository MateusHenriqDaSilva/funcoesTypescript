const fibonaci = () => {
    let proximo = 0
    let incrementar = 1
    let corrente = 0
    return () => {
        [corrente, proximo, incrementar] = [proximo, incrementar, proximo + incrementar]
        return corrente
    }
}

const pegarProximo3 = fibonaci()
for (let contador = 0; contador < 10; contador++) {
    console.log(pegarProximo3())
}