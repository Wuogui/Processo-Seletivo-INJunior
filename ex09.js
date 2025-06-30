function authors(lista) {
    let resposta = [];
    let chave;
    for (let i = 0; i < lista.length; i++) {
        for(let k = 0; k < lista[i].books.length; k++) {
            if (!resposta.includes(lista[i].books[k].author)){
            console.log('linguiça')
            resposta.push(lista[i].books[k].author)
            }
            }
        }
    return resposta
}
