const input = document.querySelector (`#name-input`);
console.log(input);

const span = document.querySelector (`#name-output`);
console.log(span);


const onInputChange = (event) =>{
    if (event.currentTarget.value)
    {span.textContent = event.currentTarget.value}
    else 
    {span.textContent = "Anonymous"};
}
  
input.addEventListener(`input`, onInputChange);

