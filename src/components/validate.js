export default class FormValidator {
  constructor(settings, formForValidation) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formForValidation;
    this._inputElements = this._formElement.querySelectorAll(this._inputSelector);
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _showError(formElem, input) {
    // console.log(inputErrorClass)
    // console.log(errorClass)
    const errorElement = this._formElement.querySelector(`#${input.id}-${this._inputErrorClass}`)
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._errorClass)
  }

  _hideError(formElem, input) {
    const errorElement = this._formElement.querySelector(`#${input.id}-${this._inputErrorClass}`)
    errorElement.textContent = '';
    input.classList.remove(this._errorClass)
  }

  _checkInputValid(formElem, input) {
    if (input.checkValidity(input)) {
      this._hideError(this._formElement, input);
    } else {
      this._showError(this._formElement, input);
    }
  }

  disabledButton() {
    // const formDis = document.querySelector(this._formSelector);
    const buttonDis = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(this._formElement, buttonDis);
  }

  deleteError() {
    // const form = document.querySelector(this._formSelector)
    const InputArr = this._formElement.querySelectorAll(this._inputSelector);
    InputArr.forEach(input => {
      input.classList.remove(this._errorClass);
      const error = this._formElement.querySelector(`#${input.id}-${this._inputErrorClass}`);
      error.textContent = '';
    });
    if (this._formElement === '.popup__form_gallery') {
      this._formElement.reset();
    }
  }

  _toggleButtonState(formElem, buttonElement) {
    // console.log(inactiveButtonClass)
    if (this._formElement.checkValidity()) {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    } else {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    }
  }

  _setEvenListeners(formElem) {
    // const inputElements = formElem.querySelectorAll(this._inputSelector);
    // const buttonElement = formElem.querySelector(this._submitButtonSelector);
    // console.log(inputSelector)
    // console.log(submitButtonSelector);
    this._inputElements.forEach((input) => {
      input.addEventListener('input', (evt) => {
        this._checkInputValid(this._formElement, evt.target);
        this._toggleButtonState(this._formElement, this._buttonElement);
      });
    });
    this._toggleButtonState(this._formElement, this._buttonElement);
    // console.log(rest)
  }

  enableValidation() {
    // this._formElement = document.querySelector(this._formSelector);
    // console.log(formSelector)
    this._formElement.addEventListener('sumbit', (evt) => {
        evt.preventDefault();
      });
      this._setEvenListeners(this._formElement);
  }
}
