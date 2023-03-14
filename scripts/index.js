let nameProfile = document.querySelector('.profile__name');
let profProfile = document.querySelector('.profile__profession');

let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');

function openPopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = profProfile.textContent;

  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openPopup);

let closePopup = document.querySelector('.popup__close');
closePopup.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
})


let formElement = document.querySelector('.popup__info');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('profession');

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  profProfile.textContent = jobInput.value;

  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

const popupPhoto = document.querySelector('.popup-photo');
const popupImg = document.querySelector('.popup-photo__img');
const popupTitle = document.querySelector('.popup-photo__title');

//массив с карточками
const initialCards = [
  {
    name: 'Судак',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Рыбачий',
    link: 'https://images.unsplash.com/photo-1615924865834-78e9fd619454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Тулиновка',
    link: 'https://images.unsplash.com/photo-1516128935666-9742cf27e24c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://images.unsplash.com/photo-1612719734820-81784b7e6573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]
const cardContainer = document.querySelector('.gallery__elements');
const cardTemplate = document.querySelector('#card').content.querySelector('.gallery__element');

function createCard(data) {
  const card = cardTemplate.cloneNode(true);
  const img = card.querySelector('.gallery__photo');
  const place = card.querySelector('.gallery__place');
  const like = card.querySelector('.gallery__like');
  const trash = card.querySelector('.gallery__delete');

  place.textContent = data.name;
  img.src = data.link;
  img.alt = data.name;

  //слушатель на кнопку Лайк
  like.addEventListener('click', () => {
    like.classList.toggle('gallery__like_liked');
  });

  //слушатель на открытие фото
  img.addEventListener('click', openImg);
  function openImg() {
    popupImg.src = data.link;
    popupImg.alt = data.name;
    popupTitle.textContent = data.name;
    popupPhoto.classList.add('popup-photo_opened');
  }

  //слушатель на закрытие зума
  const photoClose = document.querySelector('.popup-photo__close');
  photoClose.addEventListener('click', () => {
    const popupPhoto = document.querySelector('.popup-photo');
    popupPhoto.classList.remove('popup-photo_opened');
  })
  //слушатель на удаление фото из галереи
  trash.addEventListener('click', (evt) => {
    evt.target.closest('.gallery__element').remove();
  });


  return card;
}

initialCards.forEach(elem => {
  cardContainer.append(createCard(elem));
});


let addButton = document.querySelector('.profile__add-button');
let addPhoto = document.querySelector('.add-photo');

function openAddPhoto() {
  addPhoto.classList.add('add-photo_opened');
}

addButton.addEventListener('click', openAddPhoto);

let closeAddPhoto = document.querySelector('.add-photo__close');
closeAddPhoto.addEventListener('click', () => {
  addPhoto.classList.remove('add-photo_opened');
});

const addElement = document.querySelector('.add-photo__form');
const imgCard = document.querySelector('.gallery__photo');
const placeCard = document.querySelector('.gallery__place');
const place = document.querySelector('.designation');
const img = document.querySelector('.link');

function handleAddSubmit(evt) {
  evt.preventDefault();

  imgCard.src = link.value;
  imgCard.alt = designation.value;
  placeCard.textContent = designation.value;

  addPhoto.classList.remove('add-photo_opened');
}

addElement.addEventListener('submit', handleAddSubmit);

//ccccccc



