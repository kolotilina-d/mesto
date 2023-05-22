import './index.css';
import {
  buttonOpenEditProfilePopup,
  buttonOpenAddCardPopup,
  buttonOpenAddAvatarPopup,
  config,
  popupProfileSelector,
  popupAddCardsSelector,
  templateSelector,
  popupImageSelector,
  formValidators,
  popupAddAvatarSelector,
  deleteCardSelector,
  arrayOfNames,
  cardListSelector,
} from '../scripts/utils/utils.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithSubmit from '../scripts/components/PopupWithSubmit.js';
import { api } from '../scripts/components/Api.js';
let userId = null;

const popupWithSubmit = new PopupWithSubmit(deleteCardSelector);
const popupWithImage = new PopupWithImage(popupImageSelector);

const createNewItem = (data) => {
  const card = new Card({
    data, userId, templateSelector,
    handleCardOpenClick: () => {
      popupWithImage.open(data)
    },
    handleCardDeleteClick: (id) => {
      popupWithSubmit.open();
      popupWithSubmit.setSubmitAction(() => {
        api.deleteCardItem(id)
          .then(() => card.deleteCard())
          .then(() => popupWithSubmit.close())
          .catch((err) => console.log('Ошибка удаления карточки', err))
          .finally(() => popupWithFormAddCard.setButtonText('Да'))
      })
    },
    handleChangeLike: (id) => {
      if (card.checkIsLikedButton()) {
        api.deleteLike(id)
          .then((res) => card.setLikesInfo(res.likes))
          .catch((err) => console.log('Ошибка удаления лайка', err))
      }
      else {
        api.likeCard(id)
          .then((res) => card.setLikesInfo(res.likes))
          .catch((err) => console.log('Ошибка добавления лайка', err))
      }
    }
  });
  data.userId = userId;
  return card.generateCard();
}

const popupWithFormAddCard = new PopupWithForm(popupAddCardsSelector, (data) => {
  return api.addNewCard(data)
    .then(res => {
      section.addItem(createNewItem(res));
    })
})
const userInfo = new UserInfo(arrayOfNames);

const popupWithFormUser = new PopupWithForm(popupProfileSelector, (element) => {
  return api.setUserInfo(element)
    .then(res => userInfo.setUserInfo(res))
})

const popupWithFormAvatar = new PopupWithForm(popupAddAvatarSelector, (element) => {
  return api.setAvatar(element)
    .then(res => userInfo.setUserInfo(res))
})

const section = new Section((item) => section.addItem(createNewItem(item)), cardListSelector);

buttonOpenEditProfilePopup.addEventListener('click', function () {
  formValidators.profile.resetErrorTwiceOpened();
  popupWithFormUser.setData(userInfo.getUserInfo());
  popupWithFormUser.open();
});

buttonOpenAddCardPopup.addEventListener('click', function () {
  formValidators.addCard.resetErrorTwiceOpened();
  popupWithFormAddCard.open();
});

buttonOpenAddAvatarPopup.addEventListener('click', function () {
  formValidators.addAvatar.resetErrorTwiceOpened();
  popupWithFormAvatar.open();
});

popupWithImage.setEventListeners();
popupWithFormUser.setEventListeners();
popupWithFormAddCard.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupWithSubmit.setEventListeners();

Array.from(document.forms).forEach(item => {
  if (item.name !== "deleteCard") {
    const formList = new FormValidator(config, item);
    const formName = item.name;
    formValidators[formName] = formList;
    formList.enableValidation()
  }
})

api.getAppInfo()
  .then(([dataCard, dataUser]) => {
    userId = dataUser._id;
    section.addAllCards(dataCard.reverse());
    userInfo.setUserInfo(dataUser);
  })
  .catch((err) => console.log('Ошибка получения данных', err))
