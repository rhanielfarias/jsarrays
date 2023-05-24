const nomes = ["rhaniel", "Lucas", "Leandro"];

nomes.forEach(function(nome) {
    console.log(nome)
})

nomes.forEach((nome) => {
    console.log(nome)
    })

    function imprimir(nome) {
        console.log(nome)
    }
    nomes.forEach(imprimir)