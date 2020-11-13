import { popupImageScale, popupPhotoScale } from './index.js';
import { openPopup } from './index.js';

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
      const cardImg = this._element.querySelector('.photo__item-image')
      this._setEventListener();

      this._element.querySelector('.photo__title').textContent = this._name;
      cardImg.src = this._link;
      cardImg.alt = this._name;

      return this._element
    }

    _setEventListener() {
      this._element.querySelector('.photo__delete-button').addEventListener('click',  (evt) => { this._handlerCardRemove(evt) });
      this._element.querySelector('.photo__item').addEventListener('click', (evt) =>  { this._handlerLike(evt) });
      this._element.querySelector('.photo__item-image').addEventListener('click', () => { this._onClickImg() });
    }

    _handlerCardRemove(evt) {
        evt.target.closest('.photo__item').remove();
    };

    _handlerLike(evt) {
      if (evt.target.classList.contains('photo__button')) {
        evt.target.classList.toggle('photo__button_active')
      }
    }

    _onClickImg() {
      popupImageScale.src = this._link;
      openPopup(popupPhotoScale);
    };
}