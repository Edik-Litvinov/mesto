import Popup from './Popup.js';

export default  class PopupWithForm extends Popup {
  constructor(popupSelector, { handlerSubmitForm }) {
    super(popupSelector)
    this._selector = popupSelector;
    this.handlerSubmitForm = handlerSubmitForm;
    this._form = this._selector.querySelector('.popup__form')
  }

  _getInputValues() {
    // получить инпуты
    const inputs =  this._form.querySelectorAll('.popup__form-item');
    this._formValues = {};
    inputs.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    console.log(this._formValues)
    return this._formValues;
  }

  setEventListeners() {
    // перезаписать родитель
    this._selector.addEventListener('submit', (evt) => {
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

}
