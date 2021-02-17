//Desafio IMC

const name = "Felipe";
const weight = 98;
const height = 1.75;
const sex = "M";
const calcHeight = height * height
const imc = weight / calcHeight

if (imc > 30) {
  console.log(`Felipe seu IMC é de ${imc}. Você está acima do peso.`)
} else {
  console.log(`Felipe seu IMC é de ${imc}. Você não está acima do peso`)
}