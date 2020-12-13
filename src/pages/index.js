import Card from "../components/Card.js";
import FormValidator from "../components/validate.js";
import {
  formElement, popupProfile, buttonOpenPopup, nameInput, jobInput, photoList, buttonAddImage, popupGallery, formImage, popupPhotoScale, settings,
  profileTitle, profileText, avatar, popupDelete, popupAvatar, formAvatar, formAvatarButton

} from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import '../pages/index.css';
import PopupWithSubmit from "../components/PopupWithSubmit.js";


const cardList = new Section(
  {
    items: [],
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

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-18',
  headers: {
    "content-type": "application/json",
    "authorization": "869f3b1a-680b-4adf-9829-460fec151723"
  }
})


api.allDataPromise().then(arg => {
  const [ dataCard, dataUser ] = arg;
  console.log(dataCard);
  console.log(dataUser);

      const cardList = new Section(
        {
          items: dataCard,
          renderer: ({ name, link, likes, owner, _id }) => {
            const card = new Card(
              {
                name,
                link,
                likes,
                owner,
                _id,
                handleCardClick: () => {
                  newPopupWithImg.open({ name, link });
                },
                handleDeleteIconClick: () => {
                  const popupConfirmDelete = new PopupWithSubmit(popupDelete, () => {
                  api.deleteCard(_id)
                   .then((res) => {
                    card.handlerCardRemove()
                  });
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
                  : api.putLike(_id)
                      .then((res) => {
                        card.handlerLike(res)
                      })
                },
              },
              "#template-photo", dataUser,
            );
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
            formImage.reset();
          },
        },
        photoList
      );
      cardList.renderItem();


    profileTitle.textContent = dataUser.name;
    profileText.textContent = dataUser.about;
    avatar.src = dataUser.avatar;
})
  .catch((err) => {
    console.log(err);
  });

const newPopupWithImg = new PopupWithImage(popupPhotoScale);

let dataUser;
api.getInformationUser().then((res) => { dataUser = res })


const profileImage = new PopupWithForm(popupGallery, {
  handlerSubmitForm: (formData) => {
    profileImage.renderLoading(true)
    api.addNewCard(formData)
      .then(({ name, link, likes, owner, _id}) => {
        const newItemCard = new Card(
          {
            name,
            link,
            likes,
            owner,
            _id,
            handleCardClick: () => {
              // логика клика по картинки
              newPopupWithImg.open({ name, link });
            },
            handleDeleteIconClick: () => {
              const popupConfirmDelete = new PopupWithSubmit(popupDelete, () => {
              api.deleteCard(_id)
               .then((res) => {
                newItemCard.handlerCardRemove()
              });
            });
              popupConfirmDelete.setEventListeners();
              popupConfirmDelete.open();
            },
            handleLikeClick: () => {
              newItemCard.likeStatus()
              ? api.deleteLiki(_id)
                .then((res) => {
                  newItemCard.handlerLike(res)
                })
              : api.putLike(_id)
                  .then((res) => {
                    newItemCard.handlerLike(res)
                  })
            },
          },
          "#template-photo", dataUser,
        );
        const newCardElement = newItemCard.generateCard();
        cardList.addItem(newCardElement, true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((res) => {
        profileImage.renderLoading(false)
      })
  },
});

const aboutUser = new UserInfo({
  userName: ".profile__title",
  userInfo: ".profile__text",
});


const profileEdit = new PopupWithForm(popupProfile, {
  handlerSubmitForm: (formData) => {
    profileEdit.renderLoading(true)
    api.saveInfoUser(formData)
      .then((res) => {
        aboutUser.setUserInfo(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((res) => {
        profileEdit.renderLoading(false)
      })
  },
});

const popupFormAvatar = new PopupWithForm(popupAvatar, {
  handlerSubmitForm: (formData) => {
    popupFormAvatar.renderLoading(true)
    api.avatar(formData)
      .then((res) => {
        avatar.src = res.avatar
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((res) => {
        popupFormAvatar.renderLoading(false)
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
  profileImage.open();
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
profileImage.setEventListeners();
newPopupWithImg.setEventListeners();
formValidationGallery.enableValidation();
formValidationProfile.enableValidation();
formValidationAvatar.enableValidation();
