import {popupPhoto, popupImage, buttonCloseImagePopup, popupImageCaption} from './units.js';
import { openPopup } from './index.js';

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.gallery__element').cloneNode(true);

    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.gallery__place').textContent = this._name;
    this._element.querySelector('.gallery__photo').src = this._link;
    this._element.querySelector('.gallery__photo').alt = this._name;

    return this._element;
  }

  _handleOpenPopup() {
    popupImage.src = this._link;
    popupImageCaption.textContent = this._name;
    openPopup(popupPhoto);
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupPhoto.classList.remove('popup_opened');
  }

  _handleLikeCard() {
    this._element.querySelector('.gallery__like').classList.toggle('gallery__like_liked');
  }

  _handleRemoveCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._element.querySelector('.gallery__photo').addEventListener('click', () => { this._handleOpenPopup() });
    buttonCloseImagePopup.addEventListener('click', () => { this._handleClosePopup() });
    this._element.querySelector('.gallery__like').addEventListener('click', () => { this._handleLikeCard() });
    this._element.querySelector('.gallery__delete').addEventListener('click', () => { this._handleRemoveCard() });
  }
}
