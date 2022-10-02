var namee = prompt('Qual o seu Nome?')
var velocity = 0
var newVelocity = prompt('Qual a velocidade que voce deseja?')
var confirmVelocity = confirm('a nave está indo a ' + newVelocity + ' km/s?')

if (confirmVelocity){
    velocity = newVelocity
}
if(velocity <= 0){
    alert('a nave esta parada')
}
else if(velocity > 1 && velocity <= 40){
    alert('a nave esta muito lenta, acelere')
}
else if(velocity > 40 && velocity < 80){
    alert('a nave esta em uma velocidade boa')
}
else{
    alert('a nave esta numa velocidade perigosa')
}

alert('o nome do piloto eh ' + namee + ' a velocidade atual eh de ' + newVelocity)