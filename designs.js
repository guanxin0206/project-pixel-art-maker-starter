// Select color input
// Select size input
const colorPicker = document.getElementById('colorPicker');
const heightInput = document.getElementById('inputHeight');
const widthInput = document.getElementById('inputWidth');
const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = heightInput.value;
  const width = widthInput.value;

  // Call makeGrid function
  makeGrid(width, height);
});

function makeGrid(width, height) {
  // Clear existing grid
  pixelCanvas.innerHTML = '';

  for (let i = 0; i <= height; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j <= width; j++) {
      const cell = document.createElement('td');

      // Add event listenr to change cell color
      cell.addEventListener('click', function () {
        cell.style.backgroundColor = colorPicker.value;
      });

      row.appendChild(cell);
    }
    pixelCanvas.appendChild(row);
  }
}
