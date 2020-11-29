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

  setUserInfo(formData) {
    this._elementName.textContent = formData['profile-title'];
    this._elementInfo.textContent = formData['profile-subtitle'];
  }

}
