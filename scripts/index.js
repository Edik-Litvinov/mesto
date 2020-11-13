import { Card } from './Card.js';
import { FormValidator } from './validate.js';
import { initialCards } from './dataArr.js';

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

// Попап картинок
const popupGalleryClose = document.querySelector(".popup__close-image_gallery");
const buttonArr = document.querySelectorAll('.popup__form-button')

export const popupImageScale = document.querySelector('.popup__image-scale');
export const closeScale = document.querySelector(".popup__close-image_scale");
export const popupPhotoScale = document.querySelector(".popup_photo-scale");

function submitFormHandlerImage(evt) {
  evt.preventDefault();
  const newItem = new Card({
    name: inputTitle.value,
    link: inputImage.value,
  }, '#template-photo');
  const cardElement = newItem.generateCard();
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

// закрытие по Esc
function closeEsc (evt) {
  const popupEsc = document.querySelector('.popup_opened');
  const key = evt.key;
    if (key === 'Escape') {
      closePopup(popupEsc);
    }
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
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

const settings = {
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'error',
  errorClass: 'popup__form-item_state'
}

const formValidationProfile = new FormValidator(settings, '.popup__form');
const formValidationGallery = new FormValidator(settings, '.popup__form_gallery');

formValidationGallery.enableValidation();
formValidationProfile.enableValidation();

buttonOpenPopup.addEventListener("click", () => {
  savePopup(popupProfile);
  formValidationProfile.disabledButton();
  formValidationProfile.deleteError();
});

buttonPopupClose.addEventListener("click", () => closePopup(popupProfile));
formElement.addEventListener("submit", submitFormHandler);

buttonAddImage.addEventListener("click", () => {
  formValidationGallery.disabledButton();
  formValidationGallery.deleteError();
  openPopup(popupGallery);
});

popupGalleryClose.addEventListener("click", () => closePopup(popupGallery));
formImage.addEventListener("submit", submitFormHandlerImage);
closeScale.addEventListener('click', () => { closePopup(popupPhotoScale) });

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
// document.addEventListener('keydown', (evt) => {
//   popups.forEach((pop) => {
//     if (evt.key === 'Escape') {
//       closePopup(pop);
//     }
//   });
// });

