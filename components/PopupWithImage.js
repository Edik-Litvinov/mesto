import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = null;
    this._text = null;
    this._popupSelector = popupSelector;
  }

  open({ name, link }) {
   const popupImgScal = this._popupSelector.querySelector('.popup__image-scale');
   this._image = link;
   this._text = name;
   popupImgScal.src = this._image;
   popupImgScal.alt = this._text;
   super.open();
  }

}
