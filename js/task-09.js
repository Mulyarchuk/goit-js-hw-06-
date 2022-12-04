function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector(`.change-color`);
const span = document.querySelector(`.color`);

const changeColor = () => {
  const randomColor = getRandomHexColor();
 document.body.style.backgroundColor = randomColor;
 console.log(randomColor);
 span.textContent = randomColor; 

}
changeColorButton.addEventListener (`click`, changeColor);