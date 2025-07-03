let menuPrincipal = 0;
let fila = [];
let nome;

do {
    if (menuPrincipal == 0){
        menuPrincipal = parseInt(prompt(`O que deseja fazer?
    1 - "Novo Cliente" 
    2 - "Atender Cliente
    3 - "Sair" `))
    }
    else {menuPrincipal = parseInt(prompt(` A lista de espera é ` + fila.map((item, index) => `${index + 1}° ${item}`).join(` `) + `
    O que deseja fazer?
    1 - "Novo Cliente" 
    2 - "Atender Cliente
    3 - "Sair" `))}
    switch (menuPrincipal) {
        case 1:
            nome = prompt('Diga o nome do novo cliente para adicioná-lo na lista: ')
            fila.push(nome)
            break
        case 2:
            console.log(fila.shift() + " está sendo atendido.")
            break
        case 3:
            chave = 2
            break
    }
} while (menuPrincipal != 3)
