export default class Section {
  constructor( elementContainer) {
    // this._initialItems  = items;
    // this.renderer = renderer;
    this._elementContainer = elementContainer;
  }

  // renderItem() {
  //   this._initialItems.reverse().map(item => {
  //     this.renderer(item);
  //   });
  // }

  addItem(element) {
    // isPrepend
    // ? this._elementContainer.prepend(element)
    // : this._elementContainer.append(element)
    this._elementContainer.prepend(element)
  }

}
