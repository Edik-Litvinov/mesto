export default class Card {
  constructor( { name, link, handleCardClick }, cardSel) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSel;
    this.handleCardClick = handleCardClick;
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
      this._element.querySelector('.photo__item-image').addEventListener('click', () => { this.handleCardClick() });
    }

    _handlerCardRemove(evt) {
        evt.target.closest('.photo__item').remove();
    };

    _handlerLike(evt) {
      if (evt.target.classList.contains('photo__button')) {
        evt.target.classList.toggle('photo__button_active')
      }
    }

}
