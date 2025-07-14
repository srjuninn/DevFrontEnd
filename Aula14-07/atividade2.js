// Exercício 2 – Mudar a cor de fundo de uma div
// Crie uma div com um ID.
// Adicione width: 200px; height: 100px; background-color: lightgray;
// Ao clicar em um botão, a cor de fundo dessa div deve mudar para amarelo.

let box = document.getElementById("box");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    box.style.backgroundColor = "yellow"
})