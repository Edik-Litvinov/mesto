export class FormValidator {
  constructor(settings) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
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

  _toggleButtonState(formElem,buttonElement) {
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
    const inputElements = Array.from(formElem.querySelectorAll(this._inputSelector));
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
    const formsElements = Array.from(document.querySelectorAll(this._formSelector));
    // console.log(formSelector)
    formsElements.forEach(form => {
      form.addEventListener('sumbit', (evt) => {
        evt.preventDefault();
      });
      this._setEvenListeners(form);
    });
  }
}
