const buttonRight = document.getElementById('carousel-next');
const buttonLeft = document.getElementById('carousel-prev');

buttonRight.onclick = function() {
  document.getElementById('carousel').scrollLeft += 300;
};

buttonLeft.onclick = function() {
  document.getElementById('carousel').scrollLeft -= 300;
};