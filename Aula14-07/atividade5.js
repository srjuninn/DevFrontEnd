// Exercício 1 – Trocar cor de fundo ao passar o mouse
// Crie uma div com um ID.
// Quando o usuário passar o mouse por cima, a cor de fundo deve mudar para azul claro.
// Quando o mouse sair, deve voltar à cor original (cinza claro).

let box = document.getElementById("box");

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "lightblue"
})
box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "lightgray"
})