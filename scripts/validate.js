// console.log(formElement)

// formElement   форма
// nameInput     инпуты
// jobInput      инпуты

function showError(formElem, input, {inputErrorClass, errorClass}) {
  // console.log(inputErrorClass)
  // console.log(errorClass)
  const errorElement = formElem.querySelector(`#${input.id}-${inputErrorClass}`)
  errorElement.textContent = input.validationMessage;
  input.classList.add(errorClass)
}

function hideError(formElem, input, {errorClass, inputErrorClass}) {
  const errorElement = formElem.querySelector(`#${input.id}-${inputErrorClass}`)
  errorElement.textContent = '';
  input.classList.remove(errorClass)
}

function checkInputValid(formElem, input, {inputErrorClass, errorClass}) {
  if (input.checkValidity(input)) {
    hideError(formElem, input, {errorClass, inputErrorClass});
  } else {
    showError(formElem, input, {inputErrorClass, errorClass});
  }
}

function toggleButtonState(formElem,buttonElement, {inactiveButtonClass}) {
  // console.log(inactiveButtonClass)
  if (formElem.checkValidity()) {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  } else {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  }
}

function setEvenListeners(formElem, {inputSelector, submitButtonSelector, ...rest}) {
  const inputElements = Array.from(formElem.querySelectorAll(inputSelector));
  const buttonElement = formElem.querySelector(submitButtonSelector);
  // console.log(inputSelector)
  // console.log(submitButtonSelector);
  inputElements.forEach((input) => {
    input.addEventListener('input', (evt) => {
      checkInputValid(formElem, evt.target, rest);
      toggleButtonState(formElem, buttonElement, rest);
    });
  });
  toggleButtonState(formElem, buttonElement, rest);
  // console.log(rest)
}

function enableValidation({formSelector, ...rest}) {
  const formsElements = Array.from(document.querySelectorAll(formSelector));
  // console.log(formSelector)
  formsElements.forEach(form => {
    form.addEventListener('sumbit', (evt) => {
      evt.preventDefault();
    });
    setEvenListeners(form, rest);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'error',
  errorClass: 'popup__form-item_state'
});



