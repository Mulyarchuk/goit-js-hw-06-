const form = document.querySelector(`.login-form`);

const onSubmit = (event) =>{
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;
    if (email.value ===`` || password.value ===``){
        alert `All fields must be filled`
    }
    const FormData = {
        email: email.value,
        password: password.value,
    };
    ( console.log (FormData));
    event.currentTarget.reset();
}
form.addEventListener(`submit`, onSubmit)
