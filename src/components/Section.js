export default class Section {
  constructor({ renderer },elementContainer) {
    this.renderer = renderer;
    this._elementContainer = elementContainer;
  }

  renderItem(data) {
    data.reverse().map(item => {
      this.renderer(item);
    });
  }

  addItem(element) {
    // isPrepend
    // ? this._elementContainer.prepend(element)
    // : this._elementContainer.append(element)
    this._elementContainer.prepend(element)
  }

}
