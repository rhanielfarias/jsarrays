const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
const ListaAlunosEMedias = [alunos, medias];

function exibirAluno(aluno) {
 if(ListaAlunosEMedias[0].includes(aluno)){
    const [alunos, medias] = ListaAlunosEMedias;

    const indice = alunos.indexOf(aluno);
    const mediaDoAluno = medias[indice];

    console.log(`O aluno ${aluno} tirou a nota de ${mediaDoAluno}`)
 }    else{
    console.log(`${aluno} Não está cadastrado`)
 }
}

exibirAluno("João");