let tabuada = document.querySelector('#tabuada tbody')
let valorA = document.querySelector('#numero')
let btn = document.querySelector('#gerar')
let btnLimpar = document.querySelector('#reset')

//tabuada.innerHTML = ''

//Gera tabuada
btn.addEventListener('click', () =>{
    for(let i = 0; i<=10; i++){

        let resultado = parseInt(valorA.value) * i

        let template = `
            <tr>
                <td>${valorA.value}</td>
                <td>X</td>
                <td>${i}</td>
                <td>=</td>
                <td>${resultado}</td>
            </tr>`  
        
        let tr = document.createElement('tr')
        tr.innerHTML = template

        tabuada.appendChild(tr)        
    }
})

//limpa os campos da tabuada
btnLimpar.addEventListener('click', () =>{
    tabuada.innerHTML = ''
})