let numeros = prompt("Digite quantos números deseja inserir: ");
let n;
let lista = [];
let numerosCrescentes = 0;
for(let i = 0; i < numeros; i++){
    n = prompt("Insira um número: ");
    lista.push(n)
    // conferindo pares consecutivos de números
    if (i!=0){
        if (lista[i] > lista[i-1]){
            console.log(`${lista[i-1]} e ${lista[i]} estão em ordem crescente!`)
            numerosCrescentes++
        }
    }
}
console.log(numerosCrescentes + " números estão em ordem crescente")