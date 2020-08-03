function prefixoId() {
    let sequencia = 'ABCDEFGHIJLKLMNOPKRSTUVXZWY' //minha sequencia de caracteres
    let prefixo = [] //array que armazenara os caracteres de prefixo

    //laço que irá gerar os 3 digitos
    for (let i = 0; i < 3; i++) {
        let caracter = Math.floor(Math.random() * 10 + 1)
            //caso o digito gerado seja maior que a quantidade de caracteres irá gerar o digito de novo
        while (caracter > sequencia.length - 1) {
            caracter = Math.floor(Math.random() * 10 + 1)
        }

        prefixo.push(sequencia[caracter])
    }

    return prefixo.join('') //juntando os caracteres
}

//console.log(prefixoId())

function sufixoId() {
    let sufixo = [] //array que armazenará os 5 digitos criados
        //laço que irá gerar os 5 digitos
    for (let i = 0; i < 5; i++) {
        let digito = Math.floor(Math.random() * 10 + 1) //formula para gerar um digito inteiro
            //caso o digito seja maior que 9 repete o processo anterior
        while (digito > 9) {
            digito = Math.floor(Math.random() * 10 + 1)
        }
        sufixo.push(digito)
    }

    return sufixo.join('') //juntando todos os digitos
}

//console.log(sufixoId())

function gerarIdCompleto() {
    let id = prefixoId() + sufixoId() //pegando o prefixo e o sufixo para gerar o id

    return id
}

//Teste
console.log(`ID: ${gerarIdCompleto()}`)
console.log(`ID: ${gerarIdCompleto()}`)
console.log(`ID: ${gerarIdCompleto()}`)
console.log(`ID: ${gerarIdCompleto()}`)
console.log(`ID: ${gerarIdCompleto()}`)