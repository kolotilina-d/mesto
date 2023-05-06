import './index.css';
import { initialCards, arrayOfNames } from '../scripts/utils/arrayOfCards.js';
import {
  cardListSelector,
  buttonOpenEditProfilePopup,
  buttonOpenAddCardPopup,
  config,
  popupProfileSelector,
  popupAddCardsSelector,
  templateSelector,
  popupImageSelector,
  formValidators
} from '../scripts/utils/utils.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

const userInfo = new UserInfo(arrayOfNames);

const popupImage = new PopupWithImage(popupImageSelector);

const section = new Section({
  items: initialCards, renderer: (element) => {
    const card = new Card(element, templateSelector, popupImage.open);
    return card.generateCard();
  }
}, cardListSelector);

section.addAllCards();

const popupWithFormUser = new PopupWithForm(popupProfileSelector, (element) => {
  userInfo.setUserInfo(element);
  popupWithFormUser.close();
})

const popupWithFormAddCard = new PopupWithForm(popupAddCardsSelector, (element) => {
  section.addItem(element);
  popupWithFormAddCard.close();
})

buttonOpenEditProfilePopup.addEventListener('click', function () {
  formValidators.profile.resetErrorTwiceOpened();
  popupWithFormUser.setData(userInfo.getUserInfo());
  popupWithFormUser.open();
});

buttonOpenAddCardPopup.addEventListener('click', function () {
  formValidators.addCard.resetErrorTwiceOpened();
  popupWithFormAddCard.open();
});

popupImage.setEventListeners();
popupWithFormUser.setEventListeners();
popupWithFormAddCard.setEventListeners();

Array.from(document.forms).forEach(item => {
  const formList = new FormValidator(config, item);
  const formName = item.name;
  formValidators[formName] = formList;
  formList.enableValidation()
})
