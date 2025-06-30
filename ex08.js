function countBooksInCategory(lista) {
    let resposta = {}
    for(let i = 0; i < lista.length; i++) {
        resposta[lista[i].category] = lista[i].books.length
    }
    return resposta
}
