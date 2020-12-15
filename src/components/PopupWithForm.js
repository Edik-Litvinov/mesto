import Popup from './Popup.js';

export default  class PopupWithForm extends Popup {
  constructor(popupElement, { handlerSubmitForm }) {
    super(popupElement)
    this.handlerSubmitForm = handlerSubmitForm;
    this._form = this._popupElement.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__form-item');
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
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handlerSubmitForm(this._getInputValues());
      // this.close();
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
  }

}
