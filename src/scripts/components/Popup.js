export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButon = this._popupElement.querySelector('.popup__close');
    this._form = this._popupElement.querySelector('.popup__info');
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.code == "Escape") {
      this.close()
    }
  }

  _handleClickOverlayClose(evt) {
    if (evt.target == evt.currentTarget) {
      this.close()
    };
  }

  setEventListeners() {
    this._closeButon.addEventListener('click', () => this.close());
    this._popupElement.addEventListener('click', (evt) => this._handleClickOverlayClose(evt));
  }
}