let organicWrapper = document.querySelector('.organic-elements-wrapper');
let organicElement = document.querySelector('.organic-element');

for (let x = 0; x < 3; x++) {
  let clone = organicElement.cloneNode(true);
  organicWrapper.append(clone);
}
