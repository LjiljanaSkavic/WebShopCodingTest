let count = 1;
let displayCounterElement = document.querySelector('.display-counter');
let counterMinusElement = document.querySelector('.counter-minus');
let counterPlusElement = document.querySelector('.counter-plus');

counterPlusElement.addEventListener('click', () => {
  count++;
  updateDisplay();
});

counterMinusElement.addEventListener('click', () => {
  count = count === 1 ? 1 : --count;
  updateDisplay();
});

function updateDisplay() {
  displayCounterElement.innerHTML = count.toLocaleString();
}