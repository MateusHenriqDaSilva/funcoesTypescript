const cliente = { id: 1234, nome: 'Mateus Henrique' }

const formatoParaMostrar = () => {
    cliente.nome = `${cliente.nome} id: ${cliente.id}`
}

formatoParaMostrar()

console.log(cliente.nome)