export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialCards = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addAllCards() {
    this._initialCards.forEach(element => {
      this.addItem((element))
    })
  }

  addItem(element) {
    this._container.prepend(this._renderer(element));
  }
}

