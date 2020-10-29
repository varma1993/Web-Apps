/* Funtions */
function greet(x) {
  alert("Hello " + x + "!");
}

//greet("Varma")

/* Objects */

//object declaration
let cat = {
  name: "fluffy",
  age: 4,
  color: "black",
  favorite_foods: {
    most_favorite: "tuna",
    least_favorite: "apples"
  },
  meow() {
    alert("Meeooow!");
  }
};

//alert function declaration
function click_func() {
  alert(cat.favorite_foods.most_favorite);
}

//Binding the click event to the alert function
//document.addEventListener("click", click_func);
