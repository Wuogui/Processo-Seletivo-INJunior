function removeEspacos(stringue) {
    let semespacos = stringue.split(" ")
    let semespacosstringue = ""
    for (let i = 0; i < semespacos.length; i++){
            semespacosstringue = semespacosstringue + semespacos[i]
    }
    return semespacosstringue

}

function ehPalindromo(stringue) {
    let transformada = removeEspacos(stringue)
    transformada = transformada.toLowerCase()
    let chave = 'é palindromo'
    for (let i = 0; i < transformada.length; i++){
        if (transformada[i] != transformada[transformada.length-1-i]) {
            chave = 'não é palindromo'
            break
    }
}
    return chave
}

let frase = prompt("Digite uma frase: ")
console.log(ehPalindromo(frase))
