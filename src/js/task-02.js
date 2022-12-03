const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrList = [];
for (let i=0; i<ingredients.length; i+=1){
  const listEl = document.createElement(`li`);
  listEl.textContent = ingredients[i];
  listEl.classList.add(`item`)
  arrList.push(listEl);
  console.log(arrList)
}
const list = document.querySelector (`#ingredients`);
list.append(...arrList);
console.log(arrList)

