export default class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButton;
    this._errorClass = config.errorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._button = this._formElement.querySelector(this._submitButtonSelector);
  }
  enableValidation() {
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault()
    })
    this._setEventListeners()
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._disableButtonState();
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkValidityInput(input);
        if (this._hasInvalidInput()) {
          this._disableButtonState();
        } else {
          this._enableButtonState();
        }
      });
    });
  }

  _checkValidityInput(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement)
    } else {
      this._showInputError(inputElement)
    }
  }

  _hasInvalidInput() {
    return Array.from(this._inputList).some(inputElement => !inputElement.validity.valid)
  }

  _showInputError(input) {
    const inputName = input.getAttribute('name');
    const errorPlace = document.getElementById(`${inputName}-error`);
    errorPlace.textContent = input.validationMessage;
    errorPlace.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    const inputName = input.getAttribute('name');
    const errorPlace = document.getElementById(`${inputName}-error`);
    errorPlace.classList.remove(this._errorClass);
    errorPlace.textContent = '';
  }

  _enableButtonState() {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.disabled = false;
  }

  _disableButtonState() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.disabled = true;
  }

  resetErrorTwiceOpened() {
    this._formElement.querySelectorAll(this._inputSelector).forEach((input) => {
      if (!input.validity.valid) {
        this._hideInputError(input)
      }
    })
    this._disableButtonState()
  }
}