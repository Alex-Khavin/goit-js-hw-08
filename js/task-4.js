const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = event.target.elements.email.value.trim();
    const pass = event.target.elements.password.value.trim();

    if (email === "" || pass === "") {
        return alert('All form fields must be filled in');
    }

    const formData = {
        email: email,
        password: pass,
    };
    console.log(formData);
    form.reset();
}
