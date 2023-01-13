let formulario = window.document.getElementById('form') 




form.addEventListener('submit', function(event){
    event.preventDefault()
    let inputPeso = window.document.getElementById('peso')
    let inputAltura = window.document.getElementById('altura')  

    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)
    
    if (!peso){
        setResultado('Peso invalido', false)
        return
    }

    if (!altura) {
        setResultado('Altura invalida', false)
        return
    }
    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)
    const msg = `Seu imc é ${imc}  (${nivelImc})`
   
    setResultado(msg, true)
})


function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3' ]

    if (imc > 39.9 ) return nivel[5]

    if (imc >= 34.9)  return nivel[4]
    
    if (imc >= 29.9) return nivel[3]
    
    if (imc >= 24.9 ) return nivel[2]
    
    if (imc >= 18.5 ) return nivel[1]

    if (imc < 18.5 ) return nivel[0]
      
}


function getImc(peso, altura) {
    const imc = peso / ((altura/100) ** 2)
    return imc.toFixed(2)
}



function criaP () {
    const p = document.createElement('p')
    return p
}

function setResultado (msg, isValid) {
    let resultado = window.document.getElementById('resultado')

    resultado.innerHTML = ''
    const p = criaP()
    if (isValid ) {
        p.classList.add('paragrafoResultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg
   
    resultado.appendChild(p)
}


