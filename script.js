const altura = document.getElementById("altura").value
const peso = document.getElementById("peso").value
const nome = document.getElementById("nome").value
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")
const formulario = document.getElementById("formulario")

function calculo(){
    if(nome.trim() !== "" && !isNaN(altura) && !isNaN(peso)){
    const imc = (peso / (altura ** 2))
    resultado.textContent = imc
}

if(imc < 18.5){
    classificacao = 'abaixo do peso'
}else if(imc < 25){
    classificacao = 'com o peso ideal'
}else if(imc < 30){
    classificacao = 'levemente acima do peso'
}else if(imc < 35){
    classificacao = 'obesidade grau I'
}else if(imc < 40){
    classificacao = 'obesidade grau II'
}else if(imc < 45){
    classificacao = 'obesidade grau III'
}

calcular.addEventListener("click", calcularIMC);