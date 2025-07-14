// Exercício 3 – Aumentar e diminuir o tamanho da div
// Crie uma div.
// Quando o mouse passar por cima, ela deve aumentar de tamanho.
// Quando o mouse sair, ela deve voltar ao tamanho original.

let box = document.getElementById("box");

box.addEventListener("mouseover", function(){
    box.style.scale = 2
})
box.addEventListener("mouseout", function(){
    box.style.scale = 1
})