const notas = [10, 10, 10, 10];
let soma = 0;
for(let i =0; i < notas.length; i++){
    soma += notas[i];
    media = soma/notas.length;
    console.log(soma, media)
}