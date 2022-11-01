//log in

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    //get information

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    console.log(email);
    console.log(password);
})