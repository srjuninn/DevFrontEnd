// Exercício 2 – Mostrar mensagem ao passar o mouse
// Crie um parágrafo e uma div.
// Quando o usuário passar o mouse na div, o parágrafo deve exibir a mensagem:
// "Mouse detectado!"
// Quando o mouse sair, a mensagem deve desaparecer.

let paragrafo = document.getElementById("paragrafo");
let box = document.getElementById("box");

box.addEventListener("mouseover", function(){
    box.innerText = "Mouse detectado!"
})
box.addEventListener("mouseout", function(){
    box.innerText = ""
})