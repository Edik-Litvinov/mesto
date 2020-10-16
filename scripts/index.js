// console.log("Hello, World!");

const popupProfile = document.querySelector(".popup");
const buttonPopupClose = document.querySelector(".popup__close-image");
const buttonOpenPopup = document.querySelector(".profile__button");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__form-item_name");
const jobInput = document.querySelector(".popup__form-item_job");
const profileTitle = document.querySelector(".profile__title");
const profileText = document.querySelector(".profile__text");

//Template
const templatePhoto = document.querySelector("#template-photo").content;

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
const popupPhotoScale = document.querySelector(".popup_photo-scale");
const popupGalleryClose = document.querySelector(".popup__close-image_gallery");
// let popupImageScale = document.querySelector('.popup__image-scale');
const closeScale = document.querySelector(".popup__close-image_scale");

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

const renderCards = () => {
  const cards = initialCards.map((element) => {
    return getCard(element);
  });

  photoList.append(...cards);
};


// Получаем карточку
const getCard = (items) => {
  const card = templatePhoto.cloneNode(true);
  const photoItemImage =  card.querySelector(".photo__item-image");
  const photoTitle = card.querySelector(".photo__title");
  // console.log(card);
  photoTitle.textContent = items.name;
  photoItemImage.src = items.link;
  photoItemImage.alt = items.name;
  photoItemImage.addEventListener("click", () => {
    openPopup(popupPhotoScale);
    popupPhotoScale.querySelector(".popup__image-scale").src = items.link;
    popupPhotoScale.querySelector(".popup__text").textContent = items.name;
  });
  card.querySelector(".photo__delete-button").addEventListener("click", handlerRemove);
  card.querySelector(".photo__button").addEventListener("click", (evt) => {
    const evtTarget = evt.target;
    evtTarget.classList.toggle("photo__button_active");
    // console.log(evtTarget)
  });

  return card;
};

function submitFormHandlerImage(evt) {
  evt.preventDefault();
  const newItem = getCard({
    name: inputTitle.value,
    link: inputImage.value,
  });
  photoList.prepend(newItem);
  inputTitle.value = "";
  inputImage.value = "";
  closePopup(popupGallery);
}

const handlerRemove = (evt) => {
  evt.target.closest(".photo__item").remove();
};


// function popupToggle() {
  // if (popupProfile.classList.contains("popup_opened") !== true) {
  //   nameInput.value = profileTitle.textContent;
  //   jobInput.value = profileText.textContent;
  // }
//   popupProfile.classList.toggle("popup_opened");
// }


function savePopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileText.textContent;
    openPopup(popupProfile);
};

function openPopup(popup) {
  popup.classList.add("popup_opened");
};

function closePopup(popup) {
  popup.classList.remove("popup_opened");
};


// Находим форму в DOM
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitFormHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Находим поля формы в DOM

  // Получите значение полей из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupProfile);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
buttonOpenPopup.addEventListener("click", () => savePopup(popupProfile));
buttonPopupClose.addEventListener("click", () => closePopup(popupProfile));
formElement.addEventListener("submit", submitFormHandler);

buttonAddImage.addEventListener("click", () => openPopup(popupGallery));
popupGalleryClose.addEventListener("click", () => closePopup(popupGallery));
formImage.addEventListener("submit", submitFormHandlerImage);
closeScale.addEventListener("click", () => closePopup(popupPhotoScale));

renderCards();
