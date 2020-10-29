let a = [
  {name: "A"},
  {name: "B"},
  {name: "C"}
]

// the below push function not only mutates (modifies) the array, but also returns a value (array position of the new addition)
document.write(a.push({name: "D"}))

//Here document.write only returns [onbject object object]. we can browse values using console.log
//map just iterates through the values of the object that it is assigned to and let you perform operations on it
//map doesn't modify the actual object. It instead returns a new array
//foreach will modify the actual array

a.map(mapfunc)

function mapfunc(x){
  console.log(x.name)
}

//filter iterates and returns only the values that the condition satisfies
//filter doesnot modify the actual object

let fltr = a.filter(fltrfunc)

function fltrfunc(x){
  return x.name != "E"
}

//Here document.write only returns [onbject object object]. we can browse values using console.log
console.log(fltr)

let final_array = a.filter(fltrfunc).map(mapfunc)
console.log(final_array)