let nameProfile = document.querySelector('.profile__name');
let profProfile = document.querySelector('.profile__profession');

let popup = document.querySelector('.popup');
let EditButton = document.querySelector('.profile__edit-button');

function openPopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = profProfile.textContent;

  popup.classList.add('popup_opened');
}

EditButton.addEventListener('click', openPopup);

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
