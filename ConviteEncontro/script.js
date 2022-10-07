position = 1

const bn = document.getElementById('bn')

function f1() {
  alert('Muito grato por ter essa honra my lady, LOVE U ><!')
}

function aleatorio() {

  const posicaoX = Math.floor(Math.random() * 200)
  const posicaoY = Math.floor(Math.random() * 200)

  if(position == 1) {
    bn.style.top = posicaoX + 'px'
    bn.style.left = posicaoY + 'px'
    position = 2
  } else if (position == 2) {
    const valor1 = bn.style.top = '-' + posicaoX + 'px'
    const valor2 = bn.style.left = '-' + posicaoY + 'px'
    position = 1
  }
}
