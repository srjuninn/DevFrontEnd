// EX2 - Verificar se a idade é maior ou menor de idade
// Crie uma arrow function chamada verificarIdade que receba uma idade como parâmetro e :
// "Maior de idade" se for 18 ou mais
// "Menor de idade" caso contrário
const ageValidator = (age) => {
    return age >= 18 ? "maior de idade" : "menor de idade"
}
ageValidator(10)
console.log(ageValidator(18))