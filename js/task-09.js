function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector(`.change-color`);
const span = document.querySelector(`.color`);
const changeColor = () => {
 document.body.style.backgroundColor = getRandomHexColor();
 console.log(getRandomHexColor());
 span.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
}
changeColorButton.addEventListener (`click`, changeColor);