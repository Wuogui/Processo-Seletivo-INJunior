let a = parseInt(prompt("Digite o valor de A: "));
let b = parseInt(prompt("Digite o valor de B: "));
let c = parseInt(prompt("Digite o valor de C: "));
// Calcular o discriminante
let delta = (b**2) - (4*a*c);
let chave = 0;
if (delta != 0) {chave = delta > 0 ? 1 : -1}
// Raízes
let x1;
let x2;


switch(chave){
    case 1:
        x1 = ((-b) + (delta**(1/2)))/(2*a);
        x2 = ((-b) - (delta**(1/2)))/(2*a);
        console.log("Possui duas raízes reais distintas valendo " + x1 + " e " + x2)
        break
    case 0:
        x1 = (-b)/(2*a)
        console.log("Possui raíz dupla valendo " + x1);
        break
    case -1:
        console.log("Não possui raízes reais.");
        break
}