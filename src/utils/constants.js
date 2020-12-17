export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const popupProfile = document.querySelector(".popup");
export const buttonPopupClose = document.querySelector(".popup__close-image");
export const buttonOpenPopup = document.querySelector(".profile__button");
export const formElement = document.querySelector(".popup__form"); // убрать
export const nameInput = document.querySelector(".popup__form-item_name");
export const jobInput = document.querySelector(".popup__form-item_job");
export const profileTitle = document.querySelector(".profile__title");
export const profileText = document.querySelector(".profile__text");
export const avatar = document.querySelector('.profile__avatar');
export const popupDelete = document.querySelector('.popup_delete');

// Массив попапов
const popups = Array.from(document.querySelectorAll('.popup'));
//Template
// const templatePhoto = document.querySelector("#template-photo").content;

// Форма Картинок
export const photoList = document.querySelector(".photo__list");
export const buttonAddImage = document.querySelector(".profile__button-add");
export const popupGallery = document.querySelector(".popup_gallery");
export const formImage = document.querySelector(".popup__form_gallery");
export const inputTitle = document.querySelector(".popup__form-item_title");
export const inputImage = document.querySelector(".popup__form-item_image");
export const popupAvatar = document.querySelector(".popup_avatar");
export const formAvatar = document.querySelector('.popup__form_avatar');
export const formAvatarButton = document.querySelector('.profile__button-avatar');

// Попап картинок
export const popupGalleryClose = document.querySelector(".popup__close-image_gallery");
export const buttonArr = document.querySelectorAll('.popup__form-button')

export const popupImageScale = document.querySelector('.popup__image-scale');
export const closeScale = document.querySelector(".popup__close-image_scale");
export const popupPhotoScale = document.querySelector(".popup_photo-scale");

export const settings = {
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'error',
  errorClass: 'popup__form-item_state'
}

export const userSettings = {
  userName: ".profile__title",
  userInfo: ".profile__text",
  userAvatar: ".profile__avatar"
}

export const templateElement = document.querySelector('#template-photo');
