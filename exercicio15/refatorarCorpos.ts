const areaPI = 3.14

// definindo iterface das formas
interface Forma {
    area?: number
    tipo: 'circulo' | 'quadrado' | 'triangulo' | 'retangulo'
}

// extendo interface das formas com suas respectivas formas
interface Circulo extends Forma {
    radius: number
    tipo: 'circulo'
}

interface Quadrado extends Forma {
    altura: number
    largura: number
    tipo: 'quadrado'
}

interface Triangulo extends Forma {
    altura: number
    base: number
    tipo: 'triangulo'
}

interface Retangulo extends Forma {
    altura: number
    largura: number
    tipo: 'retangulo'
}

// definindo a funcao da forma que sera chamada conforme o tipo
const pegarArea = (forma: Forma) => {
    switch (forma.tipo) {
        case 'circulo':
            return getCirculoDaArea(forma as Circulo)
        case 'quadrado':
            return getQuadradoDaArea(forma as Quadrado)
        case 'triangulo':
            return getTrianguloDaArea(forma as Triangulo)
        case 'retangulo':
            return getRetanguloDaArea(forma as Retangulo)
    }
}

// chamada de funcoes conforme as abstracoes e tipos de interfaces
const getCirculoDaArea = (circulo: Circulo): number => {
    const { radius } = circulo
    return radius * radius * areaPI
}

const getQuadradoDaArea = (quadrado: Quadrado): number => {
    const { altura, largura } = quadrado
    return altura * largura
}

const getTrianguloDaArea = (triangulo: Triangulo): number => {
    const { base, altura } = triangulo
    return (base * altura) / 2
}

const getRetanguloDaArea = (retangulo: Retangulo): number => {
    const { altura, largura } = retangulo
    return altura * largura
}

// definindo objetos e chamando no console e passando a suas respectivas funcoes
const circulo: Circulo = { radius: 4, tipo: "circulo" }
console.log({ ...circulo, area: pegarArea(circulo) })

const quadrado: Quadrado = { altura: 4, largura: 4, tipo: "quadrado" }
console.log({ ...quadrado, area: pegarArea(quadrado) })

const triangulo: Triangulo = { base: 4, altura: 4, tipo: "triangulo" }
console.log({ ...triangulo, area: pegarArea(triangulo) })

const retangulo: Retangulo = { altura: 4, largura: 4, tipo: "retangulo" }
console.log({ ...retangulo, area: pegarArea(retangulo) })