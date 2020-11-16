let ourForm = document.getElementById("ourForm")
let inpt = document.getElementById("inpt")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit",(e) => {
  e.preventDefault()
  createItem(inpt.value)
  })

function createItem(x){
  let ourHTML=`<li id="${x}">${x} <button onClick=deleteItem(this)>Delete</button></li>`
  ourList.insertAdjacentHTML("beforeend",ourHTML)
  inpt.value=""
  inpt.focus()
}

function deleteItem(x){
  console.log(x.parentElement.id)
  x.parentElement.remove()
}