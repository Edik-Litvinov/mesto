import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(popupElement, callback) {
    super(popupElement);
    this.callback = callback;
  }

  setEventListeners() {
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.callback();
      // this.close();

    });
    super.setEventListeners();
  }

}
