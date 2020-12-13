export default class Section {
  constructor({ items, renderer }, elementContainer) {
    this._initialItems  = items;
    this.renderer = renderer;
    this._elementContainer = elementContainer;
  }

  renderItem() {
    this._initialItems.map(item => {
      this.renderer(item);
    });
  }

  addItem(element, isPrepend) {
    isPrepend
    ? this._elementContainer.prepend(element)
    : this._elementContainer.append(element)
  }

}
