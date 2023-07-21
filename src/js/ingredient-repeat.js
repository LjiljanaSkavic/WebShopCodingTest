let isExpanded = true;
let ingredientHeaderButton = document.querySelector('.ingredients-header-button');
let ingredientText = document.querySelector('.ingredient-content');

ingredientHeaderButton.addEventListener('click', () => {
  isExpanded = !isExpanded;
  ingredientHeaderButton.innerHTML = isExpanded ? '-' : '+';
  isExpanded ? ingredientText.classList.remove('hide-element') : ingredientText.classList.add('hide-element');
});