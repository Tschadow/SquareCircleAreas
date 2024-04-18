let squareAreaFieldButton = document.getElementById('square-area-button');
let circleAreaFieldButton = document.getElementById('circle-area-button');
let squareWidth = document.getElementById('square-width');
let squareLength = document.getElementById('square-length');
let circleRadius = document.getElementById('circle-radius');
squareAreaFieldButton.addEventListener('click', function() {
  squareAreaResult.textContent = squareLength.value * squareWidth.value;
});
circleAreaFieldButton.addEventListener('click', function() {
  circleAreaResult.textContent = Math.PI * Math.pow(circleRadius.value, 2);
});
let squareAreaResult = document.getElementById('square-area');
let circleAreaResult = document.getElementById('circle-area');


