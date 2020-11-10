import { popupImageScale, closeScale, popupPhotoScale } from './index.js'

export class Card {
  constructor(data, cardSel) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSel;
  }
    _getTemplate() {
    const cardEmelment = document.querySelector(this._cardSelector)
    .content
    .cloneNode(true);
    return cardEmelment
    }

    generateCard() {
      this._element = this._getTemplate();
      this._setEventListener();

      this._element.querySelector('.photo__title').textContent = this._name;
      this._element.querySelector('.photo__item-image').src = this._link;
      this._element.querySelector('.photo__item-image').alt = this._name;

      return this._element
    }

    _setEventListener() {
      this._element.querySelector('.photo__delete-button').addEventListener('click',  (evt) => { this._handlerCardRemove(evt) });
      this._element.querySelector('.photo__item').addEventListener('click', (evt) =>  { this._handlerLike(evt) });
      this._element.querySelector('.photo__item-image').addEventListener('click', () => { this._openPopup(popupPhotoScale) });
      closeScale.addEventListener('click', () => { this._closePopup(popupPhotoScale) });
    }

    _handlerCardRemove(evt) {
        evt.target.closest('.photo__item').remove();
    };

    _handlerLike(evt) {
      if (evt.target.classList.contains('photo__button')) {
        evt.target.classList.toggle('photo__button_active')
      }
    }

    _openPopup(popup) {
      popupImageScale.src = this._link;
      popup.classList.add('popup_opened');
    };

    _closePopup(popup) {
      popup.classList.remove('popup_opened');
    };
}
