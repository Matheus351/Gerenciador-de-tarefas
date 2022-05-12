

function addCard(elemento){
  const text = prompt('Qual a tarefa?')
  const ulId = elemento.previousElementSibling.id 
  const board = document.getElementById(ulId)
  const template = `
  <li>
    <p>${text}</p>
    <p class="remove" onclick="removeCard(this)">x</p>
  </li>`

  board.innerHTML+=template
}

function removeCard(elemento){
  elemento.parentNode.remove()
}