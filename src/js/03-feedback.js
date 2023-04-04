import throttle from 'lodash.throttle';
const FORM_STATE = 'feedback-form-state';
const formContent = {};
formRef = document.querySelector('.feedback-form');
formEmail = document.querySelector('.feedback-form input');
formMessage = document.querySelector('.feedback-form textarea');
const feedbackFormEmail = localStorage.getItem(FORM_STATE);
if (feedbackFormEmail) {
  formEmail.value = JSON.parse(feedbackFormEmail).email;
  formMessage.value = JSON.parse(feedbackFormEmail).message;
}
formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);
function onInput(e) {
  if (e.target.nodeName === 'INPUT') {
    formContent.email = e.target.value;
  }
  if (e.target.nodeName === 'TEXTAREA') {
    formContent.message = e.target.value;
  }
  localStorage.setItem(FORM_STATE, JSON.stringify(formContent));
}
function onSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FORM_STATE)));
  localStorage.removeItem(FORM_STATE);
  formRef.reset();
}
