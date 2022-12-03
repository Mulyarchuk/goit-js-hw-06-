function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector(`[type="number"]`);
const create = document.querySelector(`[data-create]`);
const destroy = document.querySelector(`[data-destroy]`);
const boxes = document.querySelector(`#boxes`);

let boxSize = 30;

create.addEventListener (`click`, createHandler);
destroy.addEventListener (`click`, destroyBoxes);

function createHandler (amount){
  amount = parseInt (input.value);
  createBoxes (amount);
}
function createBoxes (amount){
  const boxList = [];
  for (let i=0; i< amount; i+=1) {
      const boxMarkup = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
      boxSize+=10;
      boxList.push(boxMarkup);
  }
boxes.insertAdjacentHTML(`beforeend`, boxList.join(""));
}
function destroyBoxes(){
  boxes.innerHTML = "";
  input.value = "";
  boxSize = 30;
}