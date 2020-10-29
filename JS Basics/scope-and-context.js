/*SCOPE*/

//the below line can be defined using let instead of var
//but VAR uses function scope and LET uses block scope
var temp="global"

function func(){
  if(1==1){
    //here we defined temp using var, so the value stays valid only within the function
    var temp="local"
    console.log("func output:"+temp)
  }
  console.log("func output:"+temp)
}

console.log("outer output:" + temp)
func()
//even though the value for temp is assigned in the function, the global assignment is considered
//because we defined temp using var
console.log("outer output:" + temp)

/*CONTEXT*/
let human = {
    eats: "food",
    drinks: "water",
    //this is a method
    energy() {
      console.log("humans get energy from "+this.eats +" and "+this.drinks)
      //this here refers to the object that executes it
      //in this case, it's human
    }
}

human.energy()

function notLikes(){
  console.log("But humans don't like "+ this.eats+" and "+this.drinks)
}

//instead of direclty calling this function as "notLikes()", it can be called using .call
notLikes.call(human)