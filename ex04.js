function convert(valor, tipo){
    switch(tipo){
        case 'euro':
            valor = (valor / 6.10).toFixed(2)
            break
        case 'dolar':
            valor = (valor / 5.70).toFixed(2)
            break
    }
    return valor
}

let valorReais = parseFloat(prompt("Digite o valor em Reais: "))
console.log("O valor digitado R$" + valorReais + " equivale a €" + convert(valorReais, 'euro') + " e a $" + convert(valorReais, 'dolar'))