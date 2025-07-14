// Exercício 1: Detectando as teclas direcionais
// Crie um script que detecte quando o usuário pressiona uma das (⬅️ ⬆️ ➡️ ⬇️) e exiba no console qual seta foi pressionada.

let titulo = document.getElementById("titulo");
document.addEventListener("keydown", function (event) {

    switch(event.key){
        case "ArrowUp":
            titulo.innerText = "A seta presionada foi ⬆️"
            break;
        case "ArrowDown":
            titulo.innerText = "A seta presionada foi ⬇️"
            break;
        case "ArrowLeft":
            titulo.innerText = "A seta presionada foi ⬅️"
            break;
        case "ArrowRight":
            titulo.innerText = "A seta presionada foi ➡️"
            break;
    }

})