const lista  = ["Marcos", "Ana", "Douglas", "Leandro"];
const media = [4, 10, 9, 8, 7.8];
const reprovados =  lista.filter((_, i) =>{

return media[i] < 7;} );

console.log(reprovados)