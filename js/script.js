let nameProfile = document.querySelector('.profile__name').textContent;
let profProfile = document.querySelector('.profile__profession').textContent;

document.getElementById('name').setAttribute('value', nameProfile);
document.getElementById('profession').setAttribute('value', profProfile);

let openPopup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
function open() {
  openPopup.classList.add('popup_opened');
}

editButton.addEventListener('click', open);

let close = document.querySelector('.popup__close');
close.addEventListener('click', function () {
  openPopup.classList.remove('popup_opened');
})


let formElement = document.querySelector('.popup__info');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('profession');

function handleFormSubmit(evt) {
  evt.preventDefault();

  let elem1 = document.querySelector('.profile__name');
  let elem2 = document.querySelector('.profile__profession');

  elem1.textContent = nameInput.value;
  elem2.textContent = jobInput.value;

  document.querySelector('.popup__save').addEventListener('click', function() {
    openPopup.classList.remove('popup_opened');
  })
}

formElement.addEventListener('submit', handleFormSubmit);
