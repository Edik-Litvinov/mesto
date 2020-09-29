console.log('Hello, World!');

let popup = document.querySelector('.popup');
let buttonPopupClose = document.querySelector('.popup__close-image');
let buttonOpenPopup = document.querySelector('.profile__button');
let formElement =  document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-item_name');
let jobInput = document.querySelector('.popup__form-item_job');
let profileTitle = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');

function popupToggle() {
  if (popup.classList.contains('popup_opened') !== true) {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileText.textContent;
  }
  popup.classList.toggle('popup_opened');
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




