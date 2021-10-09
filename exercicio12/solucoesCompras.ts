interface Compra {
    id: number
    cor: string
    tamanho: string
}

export const compraFatorada = (): ((
    cor: string
) => (tamanho: string) => (quantidade: number) => Compra[]) => {
    let id = 0
    return (cor: string): ((tamanho: string) => (quantidade: number) => Compra[]) => (
        tamanho: string) => (quantidade: number): Compra[] => {
            const compras = []
            for (let contador = 0; contador < quantidade; contador++) {
                compras.push({ id: id++, cor, tamanho })
            }
            return compras
        }
}

const criarCompra = compraFatorada()
const linhaVermelha = criarCompra('vermelha')
const vermelhaPequena = linhaVermelha('P')
const vermelhaMedia = linhaVermelha('M')

const azulPequena = criarCompra('azul')('M')

const compra1 = vermelhaMedia(4)
console.log(compra1)

const compra2 = azulPequena(7)
console.log(compra2)

const compra3 = vermelhaPequena(11)
console.log(compra3)