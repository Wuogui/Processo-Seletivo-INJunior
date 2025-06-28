function verificarIdades(anosDeNascimento){
ano = parseInt(prompt("Digite o ano atual: "));
let lista = [];
for (let i=0; i < anosDeNascimento.length; i++) {
    idade = ano - anosDeNascimento[i];
    if (idade < 18){
        lista.push('menor')
    }
    else {
        lista.push('maior')
    }
}
for (let j=0; j < lista.length; j++){
    if (lista[j] === 'maior'){
        console.log(`Pessoa ${j+1}: Maior de idade`)
    }
    else{
        console.log(`Pessoa ${j+1}: Menor de idade`)
    }

}
return (lista)
}
