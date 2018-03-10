'use strict';

(function () {

  var text = document.querySelector('.text');
  var surname = text.querySelector('.surname');
  var name = text.querySelector('.name');
  var patronymic = text.querySelector('.patronymic');
  var textInfo = text.querySelector('p');
  var photo = document.querySelector('.photo');

  window.preview = {
    printInfo: function (arrays, collaborator) {
      var textContent = collaborator.target.textContent;
      var collaboratorName = [];
      for (var i = 0; i < arrays.length; i++) {
        if (textContent === arrays[i].name) {
          collaboratorName = textContent.split(' ');
          if (arrays[i].url) {
			photo.classList.remove('hidden');
            photo.style.backgroundImage = arrays[i].url;
          } else {
            photo.classList.add('hidden');
          }
          surname.textContent = collaboratorName[0];
          name.textContent = collaboratorName[1];
          patronymic.textContent = collaboratorName[2];
          textInfo.textContent = arrays[i].info;
        }
      }
    },

    deeiteInfo: function () {
	  photo.classList.add('hidden');
      photo.style.backgroundImage = '';
      surname.textContent = '';
      name.textContent = '';
      patronymic.textContent = '';
      textInfo.textContent = '';
    }
  };
})();
