let form = document.querySelector('form#contact')
let message = {
    error: 'Nome ou email estão vázios',
    success: 'Dados enviados com sucesso'
}


form.addEventListener('submit', () => {
    if(!document.querySelector("input[type='text']").value){

        alert(message.error)

        return false
    } else {
        alert(message.success)

        return true
    }
})