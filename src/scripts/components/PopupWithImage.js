import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__img');
    this._popupImageCaption = this._popupElement.querySelector('.popup__caption');
  }

  open = (data) => {
    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupImageCaption.textContent = data.name;
    super.open();
  }
}