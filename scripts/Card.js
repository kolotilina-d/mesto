import { popupPhoto, popupImage, popupImageCaption } from './units.js';
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
    this._element.querySelector('.gallery__place').textContent = this._name;
    this._cardImage = this._element.querySelector('.gallery__photo');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeButton = this._element.querySelector('.gallery__like');
    this._setEventListeners();

    return this._element;
  }

  _handleOpenPopup() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageCaption.textContent = this._name;
    openPopup(popupPhoto);
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle('gallery__like_liked');
  }

  _handleRemoveCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => { this._handleOpenPopup() });
    this._likeButton.addEventListener('click', () => { this._handleLikeCard() });
    this._element.querySelector('.gallery__delete').addEventListener('click', () => { this._handleRemoveCard() });
  }
}
