export default class UserInfo {
  constructor({ userName, userInfo }) {
    this._elementName = document.querySelector(userName);
    this._elementInfo = document.querySelector(userInfo);
  }

  getUserInfo() {
    const objectUserInfo = {};
    objectUserInfo.nameUser = this._elementName.textContent;
    objectUserInfo.aboutUser = this._elementInfo.textContent;
    return objectUserInfo
  }

  setUserInfo(res) {
    this._elementName.textContent = res.name;
    this._elementInfo.textContent = res.about;
  }

}
