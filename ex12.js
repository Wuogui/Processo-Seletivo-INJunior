function encontrarElementoUnico(lista){
    let apareceUmaVez = 0
    for(let i = 0; i < lista.length ; i++){
        for(let j = 0; j < lista.length; j++){
            if(lista[i] == lista[j] && i != j){
                break
            }
            else if (lista[i] != lista[j] && i != j && j == lista.length - 1){
                return lista[i]
            }
        }
}
}
