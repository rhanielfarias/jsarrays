const notas = [10, 10, 10, 10];
let soma = 0;
notas.forEach(function (nota, i){
soma += nota;
console.log(i)
} )
const resultado = soma/notas.length;
console.log(soma)
console.log(resultado)