const pessoa = {
    nome: 'Mateus',
    falarSaudacao: function () {
        return `Ola, ${this.nome}`
    }
}
console.log(pessoa.falarSaudacao())

const arrayFiltrado = {
    max: 3,
    filtrar: function (...numero: number[]) {
        return numero.filter((valor) => {
            return valor <= this.max
        })
    }
}
console.log(arrayFiltrado.filtrar(1, 2, 3, 4, 5))