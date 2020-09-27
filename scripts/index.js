console.log('Hello, World!');

let popup = document.querySelector('.popup');
let buttonPopupClose = document.querySelector('.popup__close-image');
let buttonOpenPopup = document.querySelector('.profile__button');

function popupToggle() {
  popup.classList.toggle('popup_opened');
};

buttonOpenPopup.addEventListener('click', popupToggle);
buttonPopupClose.addEventListener('click', popupToggle);
