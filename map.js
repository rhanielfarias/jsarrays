const notas = [9, 9, 8, 10];
 const notaAtualizada =  notas.map((nota)  => {
return nota+1 >= 10 ? 10 : nota+1; 
});
console.log(notaAtualizada)