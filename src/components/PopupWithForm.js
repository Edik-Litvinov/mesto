import Popup from './Popup.js';

export default  class PopupWithForm extends Popup {
  constructor(popupElement, { handlerSubmitForm }) {
    super(popupElement)
    this.handlerSubmitForm = handlerSubmitForm;
    this._form = this._popupElement.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__form-item');
    this._buttonSubmit = this._form.querySelector('.popup__form-button');
  }

  _getInputValues() {
    // получить инпуты
    this._formValues = {};
    this._inputs.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    console.log(this._formValues)
    return this._formValues;
  }

  setEventListeners() {
    // перезаписать родитель
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handlerSubmitForm(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    // перезаписать родитель
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._buttonSubmit.textContent = `${this._buttonSubmit.textContent}...`;
    } else {
      this._buttonSubmit.textContent = this._buttonSubmit.textContent.slice(0, this._buttonSubmit.textContent.length-3)
    }
  }

}
