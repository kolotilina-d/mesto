let nameProfile = document.querySelector('.profile__name').textContent;
let profProfile = document.querySelector('.profile__profession').textContent;

let popup = document.querySelector('.popup');
let EditButton = document.querySelector('.profile__edit-button');

function openPopup() {
  document.getElementById('name').value = nameProfile;
  document.getElementById('profession').value = profProfile;

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

let elem1 = document.querySelector('.profile__name');
let elem2 = document.querySelector('.profile__profession');

function handleFormSubmit(evt) {
  evt.preventDefault();


  elem1.textContent = nameInput.value;
  elem2.textContent = jobInput.value;

  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);
