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
close.addEventListener('click', function() {
  openPopup.classList.remove('popup_opened');
})
