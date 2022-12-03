const input = document.querySelector (`#validation-input`)
const onInputBlur = () => {
    if (input.value.length !==Number(input.dataset.length)){
        input.classList.add(`invalid`)}
        else {
            input.classList.replace(`invalid`,`valid`)};

    
    }
input.addEventListener (`blur`, onInputBlur)
