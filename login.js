const loginForm = document.getElementById('login-form');
const loginEmail = document.querySelector('#loginEmail');
const loginPass = document.querySelector('#logInpass');

loginForm.addEventListener('submit', (e)=> {
  e.preventDefault();
  formValidation();
});

const formValidation = () => {
  //email
   (loginEmail.value.trim() == '') ? errorType(loginEmail, 'Email is required.') : successType(loginEmail); 

  //password
   (loginPass.value.trim() == '') ? errorType(loginPass, 'Enter your password.') : (loginPass.value.trim().length < 5 || loginPass.value.trim().length > 10) ? errorType(loginPass, 'Password must be btwn 5 and 10.') : successType(loginPass); 
}

const errorType = (errEl, errSms) => {
  const hiddenClassOne = errEl.parentElement.querySelector('.errInputOne');
  const hiddenClassTwo = errEl.parentElement.querySelector('.errInputTwo');
  const okInput = document.querySelector('.okInput');
  
  if (hiddenClassOne.classList.contains('hidden') || hiddenClassTwo.classList.contains('hidden') || okInput.classList.contains('hidden')) {
    hiddenClassOne.classList.remove('hidden');
    hiddenClassTwo.classList.remove('hidden');
    okInput.classList.add('hidden');
  };

  hiddenClassOne.classList.remove('hidden');
  hiddenClassTwo.classList.remove('hidden');
  hiddenClassTwo.textContent = errSms; 

}

const successType = (rightEl) => {
  const hiddenClassOne = rightEl.parentElement.querySelector('.errInputOne');
  const hiddenClassTwo = rightEl.parentElement.querySelector('.errInputTwo');
  const okInput = rightEl.parentElement.querySelector('.okInput');

  okInput.classList.remove('hidden');
  hiddenClassOne.classList.add('hidden');
  hiddenClassTwo.classList.add('hidden');   
}  
