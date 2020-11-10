const popupProfile = document.querySelector(".popup");
const buttonPopupClose = document.querySelector(".popup__close-image");
const buttonOpenPopup = document.querySelector(".profile__button");
const formElement = document.querySelector(".popup__form"); // убрать
const nameInput = document.querySelector(".popup__form-item_name");
const jobInput = document.querySelector(".popup__form-item_job");
const profileTitle = document.querySelector(".profile__title");
const profileText = document.querySelector(".profile__text");

// Массив попапов
const popups = Array.from(document.querySelectorAll('.popup'));
//Template
// const templatePhoto = document.querySelector("#template-photo").content;

// Форма Картинок
const photoList = document.querySelector(".photo__list");
const buttonAddImage = document.querySelector(".profile__button-add");
const popupGallery = document.querySelector(".popup_gallery");
const formImage = document.querySelector(".popup__form_gallery");
const inputTitle = document.querySelector(".popup__form-item_title");
const inputImage = document.querySelector(".popup__form-item_image");
// let photoTitle = document.querySelector(".photo__title");
// let photoItemImage = document.querySelector(".photo__item-image");
// Попап картинок
const popupGalleryClose = document.querySelector(".popup__close-image_gallery");

export const popupImageScale = document.querySelector('.popup__image-scale');
export const closeScale = document.querySelector(".popup__close-image_scale");
export const popupPhotoScale = document.querySelector(".popup_photo-scale");


const initialCards = [
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

import { Card } from './Card.js';
import { FormValidator } from './validate.js';

function submitFormHandlerImage(evt) {
  evt.preventDefault();
  const newItem = new Card({
    name: inputTitle.value,
    link: inputImage.value,
  }, '#template-photo');
  cardElement = newItem.generateCard();
  photoList.prepend(cardElement);
  formImage.reset();
  // inputTitle.value = "";
  // inputImage.value = "";
  closePopup(popupGallery);
}

function savePopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileText.textContent;
    openPopup(popupProfile);
};

function hideError(formElem) {
  const errorElement = formElem.querySelectorAll('.popup__form-error');
  errorElement.forEach(item => {
    item.textContent = '';
  });
  const InputArr = formElem.querySelectorAll('.popup__form-item');
  InputArr.forEach(input => {
    input.classList.remove('popup__form-item_state');
    input.value = '';
  });
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
};

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  hideError(popup)
};

function submitFormHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupProfile);
}

// рендер карточек
initialCards.forEach((item) => {
  const card = new Card(item, '#template-photo');
  const cardElement = card.generateCard();
  photoList.append(cardElement);
});


const formValidation = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'error',
  errorClass: 'popup__form-item_state'
});

formValidation.enableValidation();

buttonOpenPopup.addEventListener("click", () => savePopup(popupProfile));
buttonPopupClose.addEventListener("click", () => closePopup(popupProfile));
formElement.addEventListener("submit", submitFormHandler);
buttonAddImage.addEventListener("click", () => openPopup(popupGallery));
popupGalleryClose.addEventListener("click", () => closePopup(popupGallery));
formImage.addEventListener("submit", submitFormHandlerImage);

document.addEventListener('click', () => {
  popups.forEach((popupElement) => {
    popupElement.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(popupElement)
      }
    });
  });
});

// закрытие по Esc
document.addEventListener('keydown', (evt) => {
  popups.forEach((pop) => {
    if (evt.key === 'Escape') {
      closePopup(pop);
    }
  });
});

