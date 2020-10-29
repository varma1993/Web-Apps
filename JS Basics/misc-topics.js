/*Arrow functions*/

let numbers = [1,2,3]
//this is a sample doubling function
let doubledNumbers = numbers.map(function(x){
  return x * 2
})
console.log(doubledNumbers)

//alterative code for the same snippet
//this is called arrow functions
let doubledNos = numbers.map(x => x*2)
console.log(doubledNos)

/* Function Hoisting */

//JS allows you to call the functions, even before declaring them
//function declaration should be explictly contain the word function
test()
//FUNCTION below is mandatory. Or else, the hoisting doesn't work
//remove FUNCTION and it throws an error
function test(){
  console.log('Flag hoisted function')
}

/*Template Literals*/
//tilde Key instead of double/single quotes
let sampleString="test";console.log(`This is a ${sampleString} output`)
//JS automatically adds semicolons wherever there is a line break
//If we need the code in a single line, then we need to use semi colons to seperate them