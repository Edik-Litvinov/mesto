import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._image = null;
    this._text = null;
    this._popupImgScal = this._popupElement.querySelector('.popup__image-scale');
    this._popupImgCap = this._popupElement.querySelector('.popup__text');
  }

  open({ name, link }) {
   this._image = link;
   this._text = name;
   this._popupImgScal.src = this._image;
   this._popupImgScal.alt = this._text;
   this._popupImgCap.textContent = this._text;
   super.open();
  }

}
