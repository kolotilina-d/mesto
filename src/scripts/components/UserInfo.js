export default class UserInfo {
  constructor(arrayOfNames) {
    this._username = document.querySelector(arrayOfNames.nameSelector);
    this._profession = document.querySelector(arrayOfNames.jobSelector);
    this._avatar = document.querySelector(arrayOfNames.avatar)
  }
  getUserInfo() {
    return { username: this._username.textContent, profession: this._profession.textContent }
  }

  setUserInfo(dataUser) {
    this._username.textContent = dataUser.name;
    this._profession.textContent = dataUser.about;
    this._avatar.src = dataUser.avatar
  }
}