import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  formElement, popupProfile, buttonOpenPopup, nameInput, jobInput, photoList, buttonAddImage, popupGallery, formImage, popupPhotoScale, settings,
  profileTitle, profileText, avatar, popupDelete, popupAvatar, formAvatar, formAvatarButton, templateElement, userSettings

} from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import '../pages/index.css';
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import renderLoading from "../utils/utils.js";


function createCard({ name, link, likes, owner, _id, currentUserData }, templateElement) {

  const card = new Card(
    {
      name, link, likes, owner, _id, currentUserData,

      handleCardClick: () => { newPopupWithImg.open({ name, link }) },
      handleDeleteIconClick: () => {
        const popupConfirmDelete = new PopupWithSubmit(popupDelete, () => {
          renderLoading(popupDelete, true)
        api.deleteCard(_id)
          .then((res) => {
            card.handlerCardRemove();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally((res) => {
            renderLoading(popupDelete, false);
            popupConfirmDelete.close();
          })
      });
        popupConfirmDelete.setEventListeners();
        popupConfirmDelete.open();
      },
      handleLikeClick: () => {
        card.likeStatus()
        ? api.deleteLiki(_id)
            .then((res) => {
              card.handlerLike(res)
            })
            .catch((err) => {
              console.log(err);
            })
        : api.putLike(_id)
            .then((res) => {
              card.handlerLike(res)
            })
            .catch((err) => {
              console.log(err);
            });
          }
    }, templateElement
  );
  const cardElement = card.generateCard();
  cardList.addItem(cardElement)
}

const cardList = new Section({
  renderer: ({ name, link, likes, owner, _id }) => {
    createCard({ name, link, likes, owner, _id, currentUserData }, templateElement);
  }
}, photoList);

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-18',
  headers: {
    "content-type": "application/json",
    "authorization": "869f3b1a-680b-4adf-9829-460fec151723"
  }
})

let currentUserData;
api.allDataPromise().then(arg => {
  const [ dataCard, dataUser ] = arg;
  currentUserData = dataUser;

  cardList.renderItem(dataCard)
  aboutUser.setUserInfo(dataUser)
})
  .catch((err) => {
    console.log(err);
  });

const newPopupWithImg = new PopupWithImage(popupPhotoScale);

const popupAddCard = new PopupWithForm(popupGallery, {
  handlerSubmitForm: (formData) => {
    renderLoading(popupGallery, true)
    api.addNewCard(formData)
      .then(({ name, link, likes, owner, _id }) => {
        createCard({ name, link, likes, owner, _id, currentUserData }, templateElement)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((res) => {
        renderLoading(popupGallery, false);
        popupAddCard.close();
      })
  },
});

const aboutUser = new UserInfo(userSettings);

const profileEdit = new PopupWithForm(popupProfile, {
  handlerSubmitForm: (formData) => {
    renderLoading(popupProfile, true)
    api.saveInfoUser(formData)
      .then((res) => {
        aboutUser.setUserInfo(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((res) => {
        renderLoading(popupProfile, false);
        profileEdit.close();
      })
  },
});

const popupFormAvatar = new PopupWithForm(popupAvatar, {
  handlerSubmitForm: (formData) => {
    renderLoading(popupAvatar, true)
    api.avatar(formData)
      .then((res) => {
        aboutUser.setUserInfo(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((res) => {
        renderLoading(popupAvatar, false);
        popupFormAvatar.close();
      })
  }
})

const formValidationProfile = new FormValidator(settings, formElement);
const formValidationGallery = new FormValidator(settings, formImage);
const formValidationAvatar = new FormValidator(settings, formAvatar)

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
  popupAddCard.open();
}

function openAvatarPopup() {
  formValidationAvatar.disabledButton();
  formValidationAvatar.deleteError();
  popupFormAvatar.open();
}

buttonOpenPopup.addEventListener("click", () => {
  openProfileEdit();
});
buttonAddImage.addEventListener("click", () => {
  openImagePopup();
});
formAvatarButton.addEventListener("click", () => {
  openAvatarPopup();
})



popupFormAvatar.setEventListeners();
profileEdit.setEventListeners();
popupAddCard.setEventListeners();
newPopupWithImg.setEventListeners();
formValidationGallery.enableValidation();
formValidationProfile.enableValidation();
formValidationAvatar.enableValidation();
