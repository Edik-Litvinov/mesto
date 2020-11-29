export default class Section {
  constructor({ items, renderer }, contSelector) {
    this._initialItems  = items;
    this.renderer = renderer;
    this._contSelector = contSelector;
  }

  renderItem() {
    this._initialItems.forEach(item => {
      this.renderer(item);
    });
  }

  addItem(element, isTrue) {
    const prepend = isTrue
    ? this._contSelector.prepend(element)
    : this._contSelector.append(element)
  }

}
