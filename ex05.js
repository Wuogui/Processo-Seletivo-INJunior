n = parseInt(prompt("Digite um número inteiro: "))

if (n%5 == 0 && n%3 == 0){
    console.log('fizzbuzz')
}
else if (n%5 == 0){
    console.log('buzz')
}
else if (n%3 == 0){
    console.log('fizz')
}

