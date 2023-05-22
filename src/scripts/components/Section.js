export default class Section {
  constructor(renderer, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addAllCards(dataCards) {
    dataCards.forEach(element => {
      this._renderer((element))
    })
  }

  addItem(element) {
    this._container.prepend((element));
  }
}

