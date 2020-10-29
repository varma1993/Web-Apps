document.write("Conditions <br>")

let flag = 20

//IF condition sample
if (flag > 10){
  document.write("Success!")
}
else{
  document.write("Failure!")
}

//WHILE sample
while(flag > 15){
  document.write(flag+",")
  flag--  //subtracts 1 after every iteration
}

document.write("<br><br> Higher order functions<br>")

// Higher order functions - function that accepts a function as parameter and returns a function is called higher order function

function createMultiplier(multiplier){
  return function(x){
    return x*multiplier
  }
}

//this creates an instance of create multiplier where multiplier is substituted with 2
//so whatever the create multiplier returns is assigned to doubleMe
let doubleMe = createMultiplier(2)

//the parameter 3 is passed to the return function of create multiplier's instance created above
//So 3 is assigned to x in return function
document.write(doubleMe(7))

document.write("<br><br>")

//For Each

let tmp=['a','b','c']

tmp.forEach(func)

function func(par){
  document.write(par)
}