import { initialCards } from './arrayOfCards.js';
import { cardList, config } from './units.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js';

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__profession');
const popupEditProfile = document.querySelector('.popup_info');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const formEditProfile = document.querySelector('.popup__info_profile');
const nameInput = document.getElementById('username');
const jobInput = document.getElementById('profession');
const buttonOpenAddCardPopup = document.querySelector('.profile__add-button');
const addGalleryPhoto = document.querySelector('.popup_add');
const formAddCard = document.querySelector('.popup__info_add');
const placeCard = document.querySelector('#designation');
const imgCard = document.querySelector('#link');
const closeButtons = document.querySelectorAll('.popup__close');

const formValidators = {};

Array.from(document.forms).forEach(item => {
  const formList = new FormValidator(config, item);
  const formName = item.name;
  formValidators[formName] = formList;
  formList.enableValidation()
})

// создаем разметку карточки
function createCards(elem) {
  const card = new Card(elem, '#card');
  const cardElement = card.generateCard();
  cardList.prepend(cardElement);
}

//отрисовываем начальные карточки
initialCards.forEach((initialCard) => {
  createCards(initialCard);
});

// создание карточки пользователем
function submitAddForm(evt) {
  evt.preventDefault();
  const newCardData = { name: placeCard.value, link: imgCard.value }
  createCards(newCardData);
  evt.target.reset();
  closePopup(addGalleryPhoto);
}

// изменение данных профиля пользователем
function submitEditProfileForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// закрываем с помощью esc
const closePopupWithEsc = (evt) => {
  if (evt.code == "Escape") {
    const activePopup = document.querySelector('.popup_opened')
    if (activePopup) {
      closePopup(activePopup)
    }
  }
}

// закрываем нажатием на обложку
const closePopupByClickOverlay = () => {
  const popups = Array.from(document.querySelectorAll('.popup'));
  popups.forEach(popup => {
    popup.addEventListener('click', evt => {
      if (evt.target == evt.currentTarget) {
        closePopup(popup)
      };
    });
  });
}

closePopupByClickOverlay()

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEsc);
}

buttonOpenEditProfilePopup.addEventListener('click', function () {
  formValidators.profile.resetErrorTwiceOpened();
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEditProfile);
});

buttonOpenAddCardPopup.addEventListener('click', function () {
  formValidators.addCard.resetErrorTwiceOpened();
  formAddCard.reset();
  openPopup(addGalleryPhoto);
});

formEditProfile.addEventListener('submit', submitEditProfileForm);
formAddCard.addEventListener('submit', submitAddForm);

// устанавливаем универсальный обработчик закрытия на крестик
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
