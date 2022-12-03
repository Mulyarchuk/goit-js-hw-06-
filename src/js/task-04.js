let counterValue = document.querySelector(`#value`);

const decrement = document.querySelector(`[data-action="decrement"]`);

const onDecrease = () => {
    counterValue.textContent --;
}
decrement.addEventListener(`click`,onDecrease);

const increment = document.querySelector(`[data-action="increment"]`);

const onIncrease = () => {
    counterValue.textContent ++;
}
increment.addEventListener(`click`,onIncrease)

