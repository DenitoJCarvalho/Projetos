const cpf = document.querySelector('input[id="cpf"]')
const msg = document.querySelector('#msg')
const btn = document.querySelector('#verify')
const error = msg

function validateFirstDigitCPF(cpf) {
    let sequence = [10, 9, 8, 7, 6, 5, 4, 3, 2] //criando uma sequencia de 10 a 2

    if (cpf === "") {
        return error.innerHTML = '[001] - CPF inválido. Não foi encontrado nenhum digito.'
    } else {
        let digit = cpf.slice(0, 9) //separando cada digito do cpf para ser multiplicado pela sequencia
            .split('') //separando os primeiros 9 digitos e trasnformando em um array
            .map((item, index) => { return item * sequence[index] }) //pegando 0s 9 digitos do cpf e multiplicando pelos números da sequencia
            .reduce((acumulator, item) => { return acumulator + item }) //pegando todos os valores gerados e somando

        digit = (digit * 10) % 11 //formula para pegar o resultado do primeiro digito gerado

        return digit
    }
}

function validateSecondDigitCPF(cpf) {
    let sequence = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2] //criando uma sequencia de 10 a 2

    if (cpf === "") {
        return error.innerHTML = '[001] - CPF inválido. Não foi encontrado nenhum digito.'
    } else {
        let digit = cpf.slice(0, 10) ///separando cada digito do cpf para ser multiplicado pela sequencia
            .split('') //separando os primeiros 9 digitos e trasnformando em um array
            .map((item, index) => { return item * sequence[index] }) //pegando 0s 9 digitos do cpf e multiplicando pelos números da sequencia
            .reduce((acumulator, item) => { return acumulator + item }) //pegando todos os valores gerados e somando

        digit = (digit * 10) % 11 //formula para pegar o resultado do primeiro digito gerado

        return digit
    }
}


function validateCPF(cpf) {
    let regex = /^[0-9]+$/ //expressão regular para contendo apenas digitos
    let invalids = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"] //sequências inválidas

    let searchCpfInvalids = invalids.filter(item => { return cpf === item }) //filtrando e comparando se cpf digitado aparece com algum dos formatos inválidos

    let digits = [validateFirstDigitCPF(cpf), validateSecondDigitCPF(cpf)].join().replace(',', '') //juntando os dois digitos gerados
    let lastDigits = cpf.slice(9, 11) //pegando os dois últimos digitos do cpf

    //verificando se há alguma letra
    if (regex.test(cpf) !== true) {
        return error.innerHTML = '[002] - CPF Inválido. Digite apenas números.'
    }

    //verificando se há 11 digitos
    if (cpf.length !== 11) {
        return error.innerHTML = '[003] - CPF Inválido. O CPF deve conter 11 digitos.'
    }

    //verificando se é um dos cpf inválidos conhecidos
    if (cpf === searchCpfInvalids.toString()) {
        return error.innerHTML = '[004] - CPF Inválido. Formato digitado inválido.'
    }

    //verificando se os dois últimos digitos são idênticos aos digitos gerados pela formula
    if (digits !== lastDigits) {
        return error.innerHTML = '[005] - CPF Inválido. Há divergencia nos digitos.'
    }

    return msg.innerHTML = 'CPF Válido.'

}

btn.addEventListener('click', () => {
    validateCPF(cpf.value)
})