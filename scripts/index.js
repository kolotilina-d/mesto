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

// открытие зума фото по клику
let photo = document.querySelector('.gallery__photo');
let popupPhoto = document.querySelector('.popup-photo');
let popupTitle = document.querySelector('.popup__title');
let galleryPlace = document.querySelector('.gallery__place');
let closePhoto = document.querySelector('.popup-photo__close');
let popupImg = document.querySelector('.popup-photo__img')

photo.addEventListener('click', () => {
  popupImg.src = photo.src;
  popupImg.alt = photo.alt;
  popupTitle.value = galleryPlace.textContent;

  popupPhoto.classList.add('popup-photo_opened');
});

closePhoto.addEventListener('click', () => {
  popupPhoto.classList.remove('popup-photo_opened');
});


