const alunos = ["rhaniel", "pablo", "paula", "gi", "douglas", "felipe"];
console.log(alunos)
const sala1 = alunos.slice(0, alunos.length / 2);
console.log(sala1)
const sala2 = alunos.slice(alunos.length/2);
console.log(sala2)
alunos.splice(1, 2, "Lucas");
console.log(alunos)
const salaHistoria = ["Thiago", "Rhaniel", "Ariane"];
const salaComputacao = ["Thiagoseus", "Lucas", "Varejão"];
const salasUnidas = salaHistoria.concat(salaComputacao);
console.log(salasUnidas)