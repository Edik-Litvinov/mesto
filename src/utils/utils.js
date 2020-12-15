export default function renderLoading(popupForm, check) {
  const buttonSubmit = popupForm.querySelector('.popup__form-button');
  if (check) {
    buttonSubmit.textContent = `${buttonSubmit.textContent}...`;
  } else {
    buttonSubmit.textContent = buttonSubmit.textContent.slice(0, buttonSubmit.textContent.length-3);
  }
}
