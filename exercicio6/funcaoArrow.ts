export const sentenca = (
    sujeito: string,
    verbo: string,
    ...objetos: string[]
): string => {
    return `${sujeito} ${verbo} ${objetos}`
}
console.log(sentenca('o gato', 'tem', 'fruta', 'queijo'))
console.log(sentenca('o gato', 'tem', 'leite todos os dias'))
console.log(sentenca('o gato', 'azedo'))

export const arrayParaObjeto = (mundos: string[]): string => {
    if (mundos.length < 1) {
        return ''
    }
    if (mundos.length === 1) {
        return `${mundos[0]}`
    }
}

export const arrayParaObjetoSeguimento = (mundos: string[]): string => {
    if (mundos.length < 1) {
        return ''
    }
    if (mundos.length === 1) {
        return `${mundos[0]}`
    }
    let seguimento = ''
    for (let contador = 0; contador < mundos.length; contador++) {
        if (contador === mundos.length - 1) {
            seguimento += ` e ${mundos[contador]}`
        } else {
            seguimento += `${mundos[contador]}`
        }
    }
    return seguimento
}

export const capitalizar = (sentenca: string): string => {
    return `${sentenca.charAt(0).toUpperCase()}${sentenca.slice(1).toLowerCase()}`
}