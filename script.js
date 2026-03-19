let contador = 0

// Criar card
function criarCard() {
    let input = document.getElementById("inputCard")
    let texto = input.value

    if (texto.trim() === "") return

    let card = document.createElement("div")
    card.className = "card"
    card.draggable = true

    card.id = "card" + contador++
    card.innerText = texto

    // Arrastar
    card.ondragstart = function (event) {
        event.dataTransfer.setData("text", card.id)
    }

    // Editar com duplo clique
    card.ondblclick = function () {
        let novoTexto = prompt("Editar tarefa:", card.innerText)
        if (novoTexto) {
            card.innerText = novoTexto
        }
    }

    document.getElementById("todo").appendChild(card)

    input.value = ""
}

// Permitir soltar
function allowDrop(event) {
    event.preventDefault()
}

// Soltar card
function drop(event) {
    event.preventDefault()

    let id = event.dataTransfer.getData("text")
    let card = document.getElementById(id)

    event.currentTarget.appendChild(card)
}