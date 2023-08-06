const form = document.getElementById('resForm');
const username = document.getElementById('userName');
const emailadd = document.querySelector('#emailAdd');
const passWord = document.querySelector('#passWord');
const conPassWord = document.querySelector('#conPassWord');
const agreeBtn = document.querySelector('#agreeBtn');

form.addEventListener('submit', (e) => {

  formValidation();

  if(!isConditonSuccess()) {
    e.preventDefault();
  }
})

const formValidation = () => {

  //user name-----------using Ternary operator--
   (username.value.trim() == '') ? errorType(username, 'User name can not be empty') : (username.value.trim().length < 5 || username.value.trim().length > 10) ? errorType(username, 'User name must be btwn 5 and 10.') : successType(username); 

  //email
   (emailadd.value.trim() == '') ? errorType(emailadd, 'Email is required.') : successType(emailadd); 

  //password
   (passWord.value.trim() == '') ? errorType(passWord, 'Enter your password.') : (passWord.value.trim().length < 5 || passWord.value.trim().length > 10) ? errorType(passWord, 'Password must be btwn 5 and 10.') : successType(passWord); 

  //confirm password
   (conPassWord.value.trim() == '') ? errorType(conPassWord, 'Enter your confirm password.') : (conPassWord.value !== passWord.value) ? errorType(conPassWord, 'Password does not match.') : successType(conPassWord); 

  //checkbox
  (!agreeBtn.checked) ? errorType(agreeBtn, '') : successType(agreeBtn); 
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

const isConditonSuccess = () => {
  let result;
  const okInputs = document.querySelectorAll('.okInput');

  okInputs.forEach((ok) => {
    result = (ok.classList.contains('hidden')) ? false : true;  
  });

  return result;
}



