var form = document.querySelector('form');
var avatarImg = document.querySelector('img');
var avatarUrlInput = document.querySelector('#avatarUrl');
var usernameInput = document.querySelector('#username');
var fullNameInput = document.querySelector('#fullName');
var locationInput = document.querySelector('#location');
var bioTextarea = document.querySelector('#bio');

function updateAvatar(event) {
  if (avatarUrlInput.value === '') {
    avatarImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  } else {
    avatarImg.setAttribute('src', event.target.value);
  }
}

avatarUrlInput.addEventListener('input', updateAvatar);

function submit(event) {
  avatarImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.profile.avatarUrl = avatarUrlInput.value;
  avatarUrlInput.value = '';
  data.profile.username = usernameInput.value;
  usernameInput.value = '';
  data.profile.fullName = fullNameInput.value;
  fullNameInput.value = '';
  data.profile.location = locationInput.value;
  locationInput.value = '';
  data.profile.bio = bioTextarea.value;
  bioTextarea.value = '';
}

form.addEventListener('submit', submit);
