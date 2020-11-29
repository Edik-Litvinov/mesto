export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    // const popupEsc = document.querySelector('.popup_opened');
    // const key = evt.key;
      if (evt.key === 'Escape') {
        this.close();
      }
  }

  setEventListeners() {
    const buttonPopupClose = this._popupSelector.querySelector('.popup__close-image');
    buttonPopupClose.addEventListener('click', () => { this.close() });
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close()
        }
      });
    }

}
