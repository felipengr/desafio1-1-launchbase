//Desafio Aposentadoria

var name = 'Silvana'
var sex = 'M'
var age = 65
var contribution = 38

const contributionCalc = age + contribution

const manRetired = sex == "M" && contribution >= 35 && contributionCalc >= 95
const womanRetired = sex == "F" && contribution >= 30 && contributionCalc >= 85

if (manRetired || womanRetired) {
  console.log(`${name}, você pode se aposentar`)
} else {
  console.log(`${name}, você não pode se aposentar`)
}