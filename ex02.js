function fatorial(x){
    if (x == 0){
        return 1;
    }
    return x * fatorial(x-1);
}
let n;

do {
    n = parseInt(prompt("Digite um número: "));
    while (n < 0){
        // mensagem de erro!!! -- não sei fazer ainda
        n = parseInt(prompt("Número inválido. Digite um número novamente: "))
    }
    console.log(fatorial(n))
    let confirm;
    confirm = prompt("Quer fazer o fatorial de outro número?");
    if (confirm == 'N' || confirm == "n"){
        break;
    }
} while(true);