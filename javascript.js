let selectedColor = null;

function changeBackgroundColor(radioButton) {
  if (radioButton.checked) {
    const colorChangeDiv = document.getElementById("colorChangeDiv");
    const color = radioButton.value;
    if (selectedColor !== color) {
      selectedColor = color;
      colorChangeDiv.style.backgroundColor = color;
    }
  }
}
function changeBackgroundColora(radioButton) {
  if (radioButton.checked) {
    const colorChangeDiv = document.getElementById("colorChangeDiv1");
    const color = radioButton.value;
    if (selectedColor !== color) {
      selectedColor = color;
      colorChangeDiv.style.backgroundColor = color;
    }
  }
}
function changeBackgroundColorb(radioButton) {
  if (radioButton.checked) {
    const colorChangeDiv = document.getElementById("colorChangeDiv2");
    const color = radioButton.value;
    if (selectedColor !== color) {
      selectedColor = color;
      colorChangeDiv.style.backgroundColor = color;
    }
  }
}
