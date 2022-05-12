

function addCard(elemento){
  const text = prompt('Qual a tarefa?')
  const ulId = elemento.previousElementSibling.id 
  const board = document.getElementById(ulId)
  console.log(board)
  const template = `
  <li>
    <p>${text}</p>
    <p class="remove">x</p>
  </li>`

  board.innerHTML+=template
}