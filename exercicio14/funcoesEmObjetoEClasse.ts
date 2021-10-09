function addDoisNumeros(numero1: number, numero2: number) {
    return numero1 + numero2
}

const maisUtilitarios = {
    addDoisNumeros
}
console.log(maisUtilitarios.addDoisNumeros(3, 4))

//  ou podemos escrever assim em forma de objeto

const maisUtilidades = {
    addDoisNumeros2: function (numero3: number, numero4: number) {
        return numero3 + numero4
    }
}

// ou em forma de classe

class MaisUtilidadesClasse {
    addDoisNumerosMetodo(numero1: number, numero2: number) {
        return numero1 + numero2
    }
}

const maisUtilidadesTeste = new MaisUtilidadesClasse()
console.log(maisUtilidadesTeste.addDoisNumerosMetodo(3, 4))
