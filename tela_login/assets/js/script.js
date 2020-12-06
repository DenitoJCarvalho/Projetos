//Enviar informações
document.querySelector('form#form-login').addEventListener('submit', e => {
    e.preventDefault() //parando o comportamento padrão do submit

    //Pegando os valores dos campos
    let email = document.querySelector('#email').value //valor do email
    let pass = document.querySelector('#pass').value //valor da senha

    console.log(`Login: ${email}\nSenha: ${pass}`)

    let json = {
        email,pass
    }

    if(!json.email){
        console.error(`O campo deve ser preenchido!!!`)
    }else if(!json.pass){
        console.error(`O campo password deve ser preenchido!`)
    }else{
        console.info(`Dados informado  com sucesso!`)
    }

    /*let stringJson = JSON.stringify(json) //converte para JSON
    let jsonParse = JSON.parse(stringJson) //Converte para Objeto

    console.log(json)
    console.log(stringJson)
    console.log(jsonParse)*/

})
