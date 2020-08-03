//Modelo de lâmpada em Javascript

const btnAcender = document.querySelector("#acender")
const btnApagar = document.querySelector("#apagar")

//acender luz
btnAcender.addEventListener('click', () => {
    let imgAcender = document.querySelector("#acenderLuz")
    let imgApagar = document.querySelector("#apagarLuz")

    imgApagar.style.display = "none"
    setTimeout(() => {
        imgApagar.style.display = "none"
        imgAcender.style.display = "flex"
    }, 120)

})

//apagar luz
btnApagar.addEventListener('click', () => {
    let imgAcender = document.querySelector("#acenderLuz")
    let imgApagar = document.querySelector("#apagarLuz")

    setTimeout(() => {
        imgAcender.style.display = 'none'
        imgApagar.style.display = 'flex'
    }, 120)
})
