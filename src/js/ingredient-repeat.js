let ingredientsWrapper = document.querySelector('.ingredients-elements-wrapper');
let ingredientElement = document.querySelector('.ingredient-element');

for (let x = 0; x < 2; x++) {
  let clone = ingredientElement.cloneNode(true);
  ingredientsWrapper.append(clone);
}