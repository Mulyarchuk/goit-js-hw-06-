function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector(`#controls`);
const create = document.querySelector(`[data-create]`);
const destroy = document.querySelector(`[data-destroy]`);
const boxes = document.querySelector(`#boxes`);
const amount = document.querySelector(`input`)
console.log(amount)

const divEl= document.createElement (`div`);
divEl.style.width = 30 + `px`;
divEl.style.height = 30 + `px`;
divEl.style.backgroundColor = getRandomHexColor();



const createBoxes = (amount) => {
  boxes.append(divEl);


console.log (divEl)

}
create.addEventListener(`click`, createBoxes);