let myNumber = 1
let myArray = [1,2,3,4,5,6]
let myStringArray = ["asd","wer","fgh"]
let myArray1 = [{name:"sample1", age:45}, {name:"sample2", age:63}]

//adds value to array
myStringArray.push("new entry")

//converts value to upper case and displays in console
//Right click in the below output panel below and click inspectelement. Go to console tab and the output would be visible
console.log(myStringArray[1].toUpperCase())

//removes 2 strings from the array, starting from array[1]
myStringArray.splice(1,2)

//displays the result in the browser console
console.log(myStringArray)