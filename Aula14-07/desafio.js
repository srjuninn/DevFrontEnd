// Você deve criar uma página web simples que permita a conversão de temperaturas entre Celsius e Fahrenheit. A página deve ter um campo de entrada onde o usuário pode digitar uma temperatura em Celsius. Após clicar no botão, a temperatura em Fahrenheit correspondente deve ser calculada e exibida na tela.  

// A  página deve ter:
// Um campo de input para o usuário digitar a temperatura em Celsius.
// Um botão que, ao ser clicado, vai realizar a conversão.
// Uma área onde será exibido o resultado da conversão, mostrando a temperatura correspondente em Fahrenheit.
// O resultado da conversão deve ser exibido no formato:
// "X°C é igual a Y°F", onde:
// X é o valor inserido em Celsius.
// Y é o valor convertido para Fahrenheit
// -------------------------------------------------------------------------------------

// Exemplo de Interação:
// Entrada:
// O usuário digita: 25 no campo de entrada.
// Ação:
// O usuário clica no botão "Converter".
// Saída:
// O resultado exibido será:
// "25°C é igual a 77.00°F"

let inputCelsius = document.getElementById("inputCelsius")
let btn = document.getElementById("btn");
let area = document.getElementById("area");

const celsiusParaFahrenheit = (celsius) => (celsius * 9 / 5) + 32;


btn.addEventListener("click", () => {
    const celsius = parseFloat(inputCelsius.value);
    const fahrenheit = celsiusParaFahrenheit(celsius);
    area.innerText = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;
});