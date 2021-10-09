let proximo = 0
let incrementar = 1
let corrente = 0

for (let contador = 0; contador < 10; contador++) {
    [corrente, proximo, incrementar] = [proximo, incrementar, proximo + incrementar]
    console.log(corrente)
}