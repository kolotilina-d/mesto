const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__profession');
const popupEditProfile = document.querySelector('.popup_info');
const editButton = document.querySelector('.profile__edit-button');
const closePopupProfile = document.querySelector('.popup__close_info');
const formElement = document.querySelector('.popup__info_profile');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('profession');
const popupPhoto = document.querySelector('.popup_photo');
const popupImg = document.querySelector('.popup__img');
const popupTitle = document.querySelector('.popup__caption');
const cardContainer = document.querySelector('.gallery__elements');
const cardTemplate = document.querySelector('#card').content.querySelector('.gallery__element');
const addPhotoButton = document.querySelector('.profile__add-button');
const addGalleryPhoto = document.querySelector('.popup_add');
const addElement = document.querySelector('.popup__info_add');
const placeCard = document.querySelector('#designation');
const imgCard = document.querySelector('#link');
const closeAddPhoto = document.querySelector('.popup__close_add');
const closePopupPhoto = document.querySelector('.popup__close_photo');

function createCard(data) {
  const card = cardTemplate.cloneNode(true);
  const imgCard = card.querySelector('.gallery__photo');
  const placeCard = card.querySelector('.gallery__place');
  const likeCard = card.querySelector('.gallery__like');
  const deleteCard = card.querySelector('.gallery__delete');

  placeCard.textContent = data.name;
  imgCard.src = data.link;
  imgCard.alt = data.name;

  //слушатель на кнопку Лайк
  likeCard.addEventListener('click', () => {
    likeCard.classList.toggle('gallery__like_liked');
  });

  //слушатель на открытие фото
  imgCard.addEventListener('click', () => {
    popupImg.src = data.link;
    popupImg.alt = data.name;
    popupTitle.textContent = data.name;
    openPopup(popupPhoto);
  });

  //слушатель на удаление фото из галереи
  deleteCard.addEventListener('click', (evt) => {
    evt.target.closest('.gallery__element').remove();
  });
  return card;
}

function submitAddForm(evt) {
  evt.preventDefault();

  const newCard = createCard({
    name: placeCard.value,
    link: imgCard.value
  });

  cardContainer.prepend(newCard);
  evt.target.reset();
  closePopup(addGalleryPhoto);
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

initialCards.forEach(elem => {
  cardContainer.prepend(createCard(elem));
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEditProfile);
});

addPhotoButton.addEventListener('click', function () {
  openPopup(addGalleryPhoto);
});

closePopupPhoto.addEventListener('click', function () {
  closePopup(popupPhoto);
});
closePopupProfile.addEventListener('click', function () {
  closePopup(popupEditProfile);
});
closeAddPhoto.addEventListener('click', function () {
  closePopup(addGalleryPhoto);
});
formElement.addEventListener('submit', submitEditProfileForm);
addElement.addEventListener('submit', submitAddForm);

