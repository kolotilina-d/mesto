export default class Card {
  constructor({ data, userId, templateSelector, handleCardOpenClick, handleCardDeleteClick, handleChangeLike }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this.userId = userId;
    this._likes = data.likes;
    this._counterLikes = data.likes.length;
    this._templateSelector = templateSelector;
    this._handleCardOpenClick = handleCardOpenClick;
    this._handleCardDeleteClick = handleCardDeleteClick;
    this._handleChangeLike = handleChangeLike;
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
    this._deleteButton = this._element.querySelector('.gallery__delete');
    this._setEventListeners();
    this._checkIfCardBelongUser();
    this._counterOfLikes();
    return this._element;
  }

  _handleLikeCard() {
    this._handleChangeLike(this._id)
  }

  setLikesInfo(likes) {
    this._likeButton.classList.toggle('gallery__like_liked');
    this._likeCounter.textContent = likes.length;
  }

  checkIsLikedButton() {
    return this._likeButton.classList.contains('gallery__like_liked')
  }

  _counterOfLikes() {
    this._likeCounter = this._element.querySelector('.gallery__like-counter');
    this._likeCounter.textContent = this._counterLikes;
    this._likes.forEach((item) => {
      if (item._id === this.userId) {
        this._likeButton.classList.add('gallery__like_liked')
      }
    })
  }

  _handleOpenDelete() {
    this._handleCardDeleteClick(this._id)
  }

  _handleOpenPopup() {
    this._handleCardOpenClick(this._data);
  }

  _checkIfCardBelongUser() {
    if (this.userId !== this._ownerId) this._deleteButton.remove()
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => { this._handleOpenPopup() });
    this._likeButton.addEventListener('click', () => { this._handleLikeCard() });
    this._deleteButton.addEventListener('click', () => { this._handleOpenDelete() });
  }
}
