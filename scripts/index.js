console.log('Hello, World!');

let popup = document.querySelector('.popup');
let buttonPopupClose = document.querySelector('.popup__close-image');
let buttonOpenPopup = document.querySelector('.profile__button');
let formElement =  document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-item_name');
let jobInput = document.querySelector('.popup__form-item_job');
let profileTitle = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');

//Template
let templatePhoto = document.querySelector('#template-photo').content;

// Форма Картинок
let photoList = document.querySelector('.photo__list');
let buttonAddImage = document.querySelector('.profile__button-add');
let popupGallery = document.querySelector('.popup_gallery');
let formImage = document.querySelector('.popup__form_gallery');
let inputTitle = document.querySelector('.popup__form-item_title');
let inputImage = document.querySelector('.popup__form-item_image');
let photoTitle = document.querySelector('.photo__title');
let photoItemImage = document.querySelector('.photo__item-image');
// Попап картинок
let popupPhotoScale = document.querySelector('.popup_photo-scale');
let popupGalleryClose = document.querySelector('.popup__close-image_gallery');
// let popupImageScale = document.querySelector('.popup__image-scale');
let closeScale = document.querySelector('.popup__close-image_scale');




const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


// const newMitialCards = nitialCards.map(function(photo) {
//   let templatePhoto = document.querySelector('.template-photo').content;
//   let cloneTemplate = templatePhoto.cloneNode(true);

// })

const renderCards = () => {
 const cards = initialCards.map(element => {
    return getCard(element);
  });

  photoList.append(...cards);
};

const getCard = (items) => {
  const card = templatePhoto.cloneNode(true);
  console.log(card);
    card.querySelector('.photo__title').textContent = items.name;
    card.querySelector('.photo__item-image').src = items.link;
    card.querySelector('.photo__item-image').addEventListener('click', () => {
    // const evtImage = evt.target;
    popupPhotoScale.classList.toggle('popup_opened');
    popupPhotoScale.querySelector('.popup__image-scale').src = items.link;
    popupPhotoScale.querySelector('.popup__text').textContent = items.name;
  });
  card.querySelector('.photo__delete-button').innerHTML = `<img src="./images/DeleteIcon.svg" alt="Картинка удаления">`;
  card.querySelector('.photo__delete-button').addEventListener('click', handlerRemove);
  card.querySelector('.photo__button').addEventListener('click', (evt) => {
    const evtTarget = evt.target;
    evtTarget.classList.toggle('photo__button_active');
    console.log(evtTarget)
  });

  return card;
};

function formImageSubmitHandler (evt) {
  evt.preventDefault();
  const newItem = getCard({
    name: inputTitle.value,
    link: inputImage.value
  });
  photoList.prepend(newItem);
  inputTitle.value = '';
  inputImage.value = '';
  popupToggleImage();
};

const handlerRemove = (evt) => {
  evt.target.closest('.photo__item').remove();
}

function popupToggle() {
  if (popup.classList.contains('popup_opened') !== true) {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileText.textContent;
  }
  popup.classList.toggle('popup_opened');
};

function popupToggleImage() {
  popupGallery.classList.toggle('popup_opened');
};

function scaleClose() {
  popupPhotoScale.classList.toggle('popup_opened');
};


// Находим форму в DOM
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    popupToggle();
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
buttonOpenPopup.addEventListener('click', popupToggle);
buttonPopupClose.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);

buttonAddImage.addEventListener('click', popupToggleImage);
popupGalleryClose.addEventListener('click', popupToggleImage);
formImage.addEventListener('submit', formImageSubmitHandler);
closeScale.addEventListener('click', scaleClose);



renderCards();









