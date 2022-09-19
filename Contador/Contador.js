const zerar = document.querySelector('.btn-zero')
const aumentar = document.querySelector('.btn-mais')
const diminuir = document.querySelector('.btn-menos')
const num = document.querySelector('.num')

let valor = 0

num.innerHTML = '0'

diminuir.addEventListener('click', () => {
    num.innerHTML = --valor
    corNum()
})

aumentar.addEventListener('click', () => {
    num.innerHTML = ++valor
    corNum()
})

zerar.addEventListener('click', () => {
    num.innerHTML = valor = 0
    corNum()
})

function corNum () {
    if(valor === 0) {
        num.style.color = 'black'
    } if (valor > 0 ) {
        num.style.color = 'green'
    } if(valor < 0) {
        num.style.color = 'red'
    }
}


