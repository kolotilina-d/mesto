export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButon = this._popupElement.querySelector('.popup__close')
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown',(evt) => this._handleEscClose(evt));
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown',(evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
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