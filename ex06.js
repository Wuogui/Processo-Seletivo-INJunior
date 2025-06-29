function fibonacci(termos){
    if (termos == 0) {
        return 0
    }
    else if (termos == 1) {
        return 1
    }
    else{
        return fibonacci(termos-1) + fibonacci(termos - 2)
    }
}
let i = parseInt(prompt("Digite quantos números da sequência você quer: ")) -1
while (i >= 0) {
    console.log(fibonacci(i))
    i -= 1
}