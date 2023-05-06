export default class UserInfo {
  constructor (arrayOfNames) {
    this._username = document.querySelector(arrayOfNames.nameSelector);
    this._profession = document.querySelector(arrayOfNames.jobSelector);
  }
  getUserInfo () {
    return {username: this._username.textContent, profession: this._profession.textContent }
  }

  setUserInfo (dataUser) {
    this._username.textContent = dataUser.username;
    this._profession.textContent = dataUser.profession;
  }
}