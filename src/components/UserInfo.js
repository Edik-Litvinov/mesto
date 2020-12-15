export default class UserInfo {
  constructor({ userName, userInfo, userAvatar }) {
    this._elementName = document.querySelector(userName);
    this._elementInfo = document.querySelector(userInfo);
    this._userAvatar = document.querySelector(userAvatar);
  }

  getUserInfo() {
    const objectUserInfo = {};
    objectUserInfo.nameUser = this._elementName.textContent;
    objectUserInfo.aboutUser = this._elementInfo.textContent;
    return objectUserInfo
  }

  setUserInfo(res) {
    if(res) {
      this._elementName.textContent = res.name;
      this._elementInfo.textContent = res.about;
      this._userAvatar.src = res.avatar;
    }
  }

}
