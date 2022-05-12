

function addCard(elemento){
  const text = prompt('Qual a tarefa?')
  const ulId = elemento.previousElementSibling.id 
  const board = document.getElementById(ulId)
  const template = `
  <li id="${new Date().getTime()}"  draggable="true" ondragstart="drag(event)" ">
    <p>${text}</p>
    <p class="remove" onclick="removeCard(this)">x</p>
  </li>`

  board.innerHTML+=template
}

function removeCard(elemento){
 document.getElementById(elemento.parentElement.id).remove()
}

function drag(event){
  console.log(event.target)
  event.dataTransfer.setData('card',event.target.id)
}

function over(event){
  event.preventDefault()
}

function drop(event,id){
   event.preventDefault()
   const elemento = document.getElementById(id)
   console.log('elemento',elemento)
   const data = event.dataTransfer.getData('card') //li
   const card = document.getElementById(data)  
   console.log('card',card)
   elemento.appendChild(card)
   event.dataTransfer.clearData()
}