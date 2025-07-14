// Exercício 2: Mudando a cor do fundo com teclas
// Ao pressionar as teclas "r", "g" ou "b", mude a cor de fundo da página para , ou , respectivamente.

let fundo = document.getElementById("body");

document.addEventListener("keydown", function(event){
    switch (event.key){
        case "r":
            fundo.style.backgroundColor = "red"
            break;
        case "g":
            fundo.style.backgroundColor = "green"
            break;
        case "b":
            fundo.style.backgroundColor = "blue"
            break;
    }
})