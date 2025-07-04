
let time = [];
function adicionarJogador(nome, idade, posição, pontuação){
    time.push({
    Nome: nome,
    Idade: idade,
    Posição: posição,
    Pontuação: pontuação
})
}

function buscaPorPosicao(posicao, time){
    let retorno = []
    let chave = 0
    for(let i=0; i<time.length; i++){
        if (time[i].Posição == posicao){
            console.log(time[i].Posição)
            chave = 1
        }
    }
    if(chave == 0){
        console.log("Não há nenhum jogador nessa posição.")
    }
}

function listarTime(time){
    for(let i=0; i<time.length; i++){
        console.log(time[i])
    }
}


