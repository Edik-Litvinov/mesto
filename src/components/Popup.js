export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._buttonPopupClose = this._popupElement.querySelector('.popup__close-image');
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
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
    this._buttonPopupClose.addEventListener('click', () => { this.close() });
    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close()
        }
      });
    }

}
