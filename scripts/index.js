console.log('Hello, World!');

let popup = document.querySelector('.popup');
let buttonPopupClose = document.querySelector('.popup__close-image');
let buttonOpenPopup = document.querySelector('.profile__button');

function popupToggle() {
  popup.classList.toggle('popup_opened');
};

buttonOpenPopup.addEventListener('click', popupToggle);
buttonPopupClose.addEventListener('click', popupToggle);

// Находим форму в DOM
let formElement =  document.querySelector('.popup__form');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup__form-item_name').value;
    let jobInput = document.querySelector('.popup__form-item_job').value;

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    document.querySelector('.profile__title').textContent = nameInput;
    document.querySelector('.profile__text').textContent = jobInput;
    popupToggle();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);




