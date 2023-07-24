let addToCartButton = document.getElementById("add-to-cart");

addToCartButton.addEventListener('click', ( ) => {
  addToCartButton.innerText === 'ADD TO CART' ? addToCartButton.innerHTML  = 'Added to cart' : addToCartButton.innerHTML  = 'Add to cart';
});