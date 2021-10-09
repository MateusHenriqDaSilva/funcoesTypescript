function lerLivros(titulo: string, capitulos: number[]): void {
    console.log(`iniciando o livro ${titulo}...`)
    capitulos.forEach(capitulos => {
        console.log(`lendo os capitulos ${capitulos}`)
    })
    console.log(`fim do livro`)
}

lerLivros('O mundo é maluco', [1,2,3,4])