let a = prompt("Digite o valor de A: ");
let b = prompt("Digite o valor de B: ");
let c = prompt("Digite o valor de C: ");
let delta = (b**2) - (4*a*c)

if (delta > 0){
    let x1 = ((-b) + (delta**(1/2)))/(2*a)
    let x2 = ((-b) - (delta**(1/2)))/(2*a)
    console.log("Uma raíz vale " + x1 + " a outra vale " + x2)
}