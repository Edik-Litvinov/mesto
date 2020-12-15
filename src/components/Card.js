export default class Card {
  constructor({ name, link, likes, owner, _id, handleCardClick,
    handleDeleteIconClick, handleLikeClick }, cardSel, dataUser) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._owner = owner._id;
    this._dataUser = dataUser;
    this._cardSelector = cardSel;
    this._id = _id;
    this.handleCardClick = handleCardClick;
    this.handleDeleteIconClick = handleDeleteIconClick;
    this.handleLikeClick = handleLikeClick;
    this._buttonLike = null;
    this._photoNumberLike = null;
    this._photoDeleteButton = null;
    this._isLiked = this._likes.some(like => { return this._dataUser._id === like._id });
  }
    _getTemplate() {
    const cardEmelment = this._cardSelector
    .content
    .querySelector('.photo__item')
    .cloneNode(true);
    return cardEmelment
    }

    generateCard() {
      this._element = this._getTemplate();
      const cardImg = this._element.querySelector('.photo__item-image');
      this._photoDeleteButton = this._element.querySelector('.photo__delete-button');
      this._setEventListener();
      if (this._owner  !== this._dataUser._id) {
        this._photoDeleteButton.remove();
      }

      this._buttonLike = this._element.querySelector('.photo__button');
      this._likes.forEach((item) => {
        if (this._dataUser._id === item._id) {
          this._buttonLike.classList.add('photo__button_active');
        }
      });
      this._photoNumberLike = this._element.querySelector('.photo__number-like');
      this._photoNumberLike.textContent = this._likes.length;
      this._element.querySelector('.photo__title').textContent = this._name;
      cardImg.src = this._link;
      cardImg.alt = this._name;

      return this._element
    }

    handlerCardRemove() {
      this._element.remove();
      this._element = null;
    }

    _setEventListener() {
      this._photoDeleteButton.addEventListener('click',  () => { this.handleDeleteIconClick() });
      this._element.querySelector('.photo__button').addEventListener('click', () =>  { this.handleLikeClick() });
      this._element.querySelector('.photo__item-image').addEventListener('click', () => { this.handleCardClick() });
    }


    likeStatus() {
      return this._isLiked
  }

    handlerLike(res) {
      if (!this._buttonLike.classList.contains('photo__button_active')) {
        this._buttonLike.classList.add('photo__button_active')
        this._photoNumberLike.textContent = res.likes.length;
        this._isLiked = !this._isLiked
     } else {
        this._buttonLike.classList.remove('photo__button_active')
        this._photoNumberLike.textContent = res.likes.length;
        this._isLiked = !this._isLiked
     }

    }

}
