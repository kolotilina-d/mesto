const config = {
  formSelector: '.popup__info',
  inputSelector: '.popup__input',
  submitButton: '.popup__submit',
  errorClass: 'popup__error_active',
  inactiveButtonClass: 'popup__submit_inactive',
  activeButtonClass: 'popup__submit',
}

const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((formElement) => {
    formElement.addEventListener('submit', (e) => {
      e.preventDefault()
    });
    setEventListeners(formElement, rest)
  })
}

const setEventListeners = (formElement, { inputSelector, submitButton, ...rest }) => {
  const formInputs = Array.from(formElement.querySelectorAll(inputSelector));
  const formButton = formElement.querySelector(submitButton);
  disableButtonState(formButton, rest);
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      changeErrorClass (input, rest);
      if (hasInvalidInput(formInputs)) {
        disableButtonState(formButton, rest);
      } else {
        enableButtonState(formButton, rest);
      }
    });
  });
}
const changeErrorClass = (inputElement, {errorClass}) => {
  if (inputElement.validity.valid) {
    hideInputError(inputElement, errorClass)
  } else {
    showInputError(inputElement, errorClass)
  }
}

const hasInvalidInput = (formInputs) => {
  return formInputs.some(inputElement => !inputElement.validity.valid)
}

const showInputError = (input, errorClass) => {
  const inputName = input.getAttribute('name');
  const errorPlace = document.getElementById(`${inputName}-error`);
  errorPlace.textContent = input.validationMessage;
  errorPlace.classList.add(errorClass);
}

const hideInputError = (input, errorClass) => {
  const inputName = input.getAttribute('name');
  const errorPlace = document.getElementById(`${inputName}-error`);
  errorPlace.classList.remove(errorClass);
  errorPlace.textContent = '';
}

const enableButtonState = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.classList.add(activeButtonClass);
  button.disabled = false;
}

const disableButtonState = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.classList.remove(activeButtonClass);
  button.disabled = true;
}

enableValidation(config);


