export class FormValidator {
  constructor(settings, formForValidation) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formSelector = formForValidation;
  }

  _showError(formElem, input) {
    // console.log(inputErrorClass)
    // console.log(errorClass)
    const errorElement = formElem.querySelector(`#${input.id}-${this._inputErrorClass}`)
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._errorClass)
  }

  _hideError(formElem, input) {
    const errorElement = formElem.querySelector(`#${input.id}-${this._inputErrorClass}`)
    errorElement.textContent = '';
    input.classList.remove(this._errorClass)
  }

  _checkInputValid(formElem, input) {
    if (input.checkValidity(input)) {
      this._hideError(formElem, input);
    } else {
      this._showError(formElem, input);
    }
  }

  disabledButton() {
    const formDis = document.querySelector(this._formSelector);
    const buttonDis = formDis.querySelector(this._submitButtonSelector);
    this._toggleButtonState(formDis, buttonDis);
  }

  deleteError() {
    const form = document.querySelector(this._formSelector)
    const InputArr = form.querySelectorAll(this._inputSelector);
    InputArr.forEach(input => {
      input.classList.remove(this._errorClass);
      const error = form.querySelector(`#${input.id}-${this._inputErrorClass}`);
      error.textContent = '';
    });
    if (this._formSelector === '.popup__form_gallery') {
      form.reset();
    }
  }

  _toggleButtonState(formElem, buttonElement) {
    // console.log(inactiveButtonClass)
    if (formElem.checkValidity()) {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    } else {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    }
  }

  _setEvenListeners(formElem) {
    const inputElements = formElem.querySelectorAll(this._inputSelector);
    const buttonElement = formElem.querySelector(this._submitButtonSelector);
    // console.log(inputSelector)
    // console.log(submitButtonSelector);
    inputElements.forEach((input) => {
      input.addEventListener('input', (evt) => {
        this._checkInputValid(formElem, evt.target);
        this._toggleButtonState(formElem, buttonElement);
      });
    });
    this._toggleButtonState(formElem, buttonElement);
    // console.log(rest)
  }

  enableValidation() {
    const formElement = document.querySelector(this._formSelector);
    // console.log(formSelector)
    formElement.addEventListener('sumbit', (evt) => {
        evt.preventDefault();
      });
      this._setEvenListeners(formElement);
  }
}
