
let time = [];
function adicionarJogador(nome, idade, posição, pontuação){
    time.push({
    Nome: nome,
    Idade: idade,
    Posição: posição,
    Pontuação: pontuação
})
}

function buscaPorPosicao(posicao){
    let chave = 0
    for(let i=0; i<time.length; i++){
        if (time[i].Posição == posicao){
            console.log(time[i] + ' pertence a posição.')
            chave = 1
        }
    }
    if(chave == 0){
        console.log("Não há nenhum jogador nessa posição.")
    }
}

function listarTime(){
    for(let i=0; i<time.length; i++){
        console.log(time[i])
    }
}

function calcularPontuacaoMedia(){
    let soma = 0
    for(let i=0; i<time.length; i++){
        soma += time[i].Pontuação
    }
    return soma/time.length
}

let menuPrincipal = 0;

do {
    menuPrincipal = parseInt(prompt(`O que deseja fazer?
    1 - Adicionar jogador
    2 - Buscar por posição
    3 - Listar time
    4 - Calcular pontuação média
    5 - Sair`))

    switch (menuPrincipal) {
        case 1:
            nome = prompt("Digite o nome do Jogador: ")
            idade = parseInt(prompt("Digite a idade do Jogador: "))
            posicao =prompt("Digite a posição do Jogador: ").toLowerCase()
            pontuacao = parseInt(prompt("Digite a pontuação do jogador: "))
            adicionarJogador(nome, idade, posicao, pontuacao)
            break
        case 2:
            posicao = prompt("Digite a posição que você deseja procura: ").toLowerCase()
            buscaPorPosicao(posicao)
            break
        case 3:
            listarTime()
            break
        case 4:
            console.log(calcularPontuacaoMedia())
            break
        case 5:
            break
    }
} while (menuPrincipal != 5)