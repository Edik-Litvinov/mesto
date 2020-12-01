import Card from "../components/Card.js";
import FormValidator from "../components/validate.js";
import { initialCards, formElement, popupProfile, buttonOpenPopup, nameInput, jobInput, photoList, buttonAddImage, popupGallery, formImage, popupPhotoScale, settings } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import '../pages/index.css';

const cardList = new Section(
  {
    items: initialCards,
    renderer: ({ name, link }) => {
      const card = new Card(
        {
          name,
          link,
          handleCardClick: () => {
            newPopupWithImg.open({ name, link });
          },
        },
        "#template-photo"
      );
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
      formImage.reset();
    },
  },
  photoList
);

const newPopupWithImg = new PopupWithImage(popupPhotoScale);

const profileImage = new PopupWithForm(popupGallery, {
  handlerSubmitForm: ({ name, link }) => {
    const newItemCard = new Card(
      {
        name,
        link,
        handleCardClick: () => {
          // логика клика по картинки
          newPopupWithImg.open({ name, link });
        },
      },
      "#template-photo"
    );
    const newCardElement = newItemCard.generateCard();
    cardList.addItem(newCardElement, true);
  },
});

const aboutUser = new UserInfo({
  userName: ".profile__title",
  userInfo: ".profile__text",
});

const profileEdit = new PopupWithForm(popupProfile, {
  handlerSubmitForm: (formData) => {
    aboutUser.setUserInfo(formData);
  },
});

const formValidationProfile = new FormValidator(settings, formElement);
const formValidationGallery = new FormValidator(settings, formImage);

function openProfileEdit() {
  const userGetInfo = aboutUser.getUserInfo();
  nameInput.value = userGetInfo.nameUser;
  jobInput.value = userGetInfo.aboutUser;
  formValidationProfile.disabledButton();
  formValidationProfile.deleteError();
  profileEdit.open();
}

function openImagePopup() {
  formValidationGallery.disabledButton();
  formValidationGallery.deleteError();
  profileImage.open();
}

buttonOpenPopup.addEventListener("click", () => {
  openProfileEdit();
});
buttonAddImage.addEventListener("click", () => {
  openImagePopup();
});

cardList.renderItem();
profileEdit.setEventListeners();
profileImage.setEventListeners();
newPopupWithImg.setEventListeners();
formValidationGallery.enableValidation();
formValidationProfile.enableValidation();
