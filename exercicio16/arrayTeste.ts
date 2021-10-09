export const arrayTeste = (mundos: string[]) => {
    return mundos.reduce((antes, ocorrendo, index) => {
        if (mundos.length === 1) {
            return `${ocorrendo}`
        }
        if (mundos.length - 1 === index) {
            return `${antes} e ${ocorrendo}`
        }
        return `${antes} ${ocorrendo}`
    }, "")
}

export const capitalizar = (sentenca: string) => {
    return `${sentenca.charAt(0).toUpperCase()}${sentenca.slice(1).toLowerCase()}`
}

export const sentenca = (
    subjeto: string,
    verbo: string,
    ...objetos: string[]
): string => {
    return capitalizar(`${subjeto} ${verbo} ${arrayTeste(objetos)}`)
}