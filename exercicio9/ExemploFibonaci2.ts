const pegarProximo = (): number => {
    let proximo = 0
    let incrementar = 1
    let corrente = 0;

    [corrente, proximo, incrementar] = [proximo, incrementar, proximo + incrementar]
    return corrente
}

for (let contador = 0; contador < 10; contador++) {
    console.log(pegarProximo())
}