import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormcallback) {
    super(popupSelector);
    this._submitFormcallback = submitFormcallback;
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._inputLists = Array.from(this._inputList);
    this._button = this._form.querySelector('.popup__submit');
  }

  setButtonText(text) {
    this._button.value = text
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    this._values = {};
    this._inputLists.forEach(input => {
      this._values[input.name] = input.value
    })
    return this._values
  }

  setData(dataUser) {
    this._inputLists.forEach(input => {
      input.value = dataUser[input.name];
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.setButtonText('Сохранение...')
      this._submitFormcallback(this._getInputValues());
    });
  }
}