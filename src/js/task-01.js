const numbersOfCategory =document.querySelector(`#categories`);
const quantity =numbersOfCategory.childElementCount;
console.log(`Number of categories:`,quantity);


const list =document.querySelectorAll(`li.item`);
const Category=Array.from(list);

for (const item of Category){
    const nameCategory= item.firstElementChild.textContent;
    const quantityElement=item.lastElementChild.childElementCount;
    console.log (`Category:`, nameCategory)
    console.log(`Elements:`, quantityElement)
    
}