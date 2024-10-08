const lamp = document.getElementById('lamp')
const btn = document.getElementById('cta')

const open = "./assets/img/yellow_lamp.png"
const close = "./assets/img/white_lamp.png"

const openStr = 'Accendi'
const closeStr = 'Spegni'

lamp.src = close
btn.innerHTML = openStr

btn.addEventListener('click', () => {

    if (btn.innerHTML === openStr){
        lamp.src = open
        btn.innerHTML = closeStr
    } else {
        lamp.src = close
        btn.innerHTML = openStr
    }        
})