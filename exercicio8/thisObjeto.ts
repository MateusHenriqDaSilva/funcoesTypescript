export const conta = {
    divida: 1000,
    pago: 0,
    status: 'aberto',
    pagarConta: function (quantia: number): string {
        if (quantia > this.divida - this.pago) {
            return `$${quantia} é mais do que o saldo pendente de 
            $${this.divida - this.pago}`
        }
        this.pago += quantia
        if (this.pago === this.divida) {
            this.status = 'fechado'
        }
        return this.mostrarStatus()
    },
    mostrarStatus: function (): string {
        return `$${this.pago} é o valor pago e 
        $${this.divida - this.pago} é o valor em aberto, 
        e o status e de ${this.status}`
    }
}

console.log(conta.mostrarStatus())
console.log(conta.pagarConta(1500))
console.log(conta.pagarConta(500))
console.log(conta.pagarConta(500))
