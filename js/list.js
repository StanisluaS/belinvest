'use strict';

(function () {

  var similarListTemplate = document.querySelector('#collaborator-template').content;
  window.similarListElement = document.querySelector('.collaborators');
  window.searchboxText = document.querySelector('.searchbox-text');

  window.list = {
    printList: function (collaboratorsList) {
      if (collaboratorsList.length === 0) {
        var strong = document.createElement('span');
        strong.innerHTML = 'Совпадений не найдено';
        window.similarListElement.appendChild(strong);
      } else {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < collaboratorsList.length; i++) {
          fragment.appendChild(getList(collaboratorsList[i]));
        }
        window.similarListElement.appendChild(fragment);
      }
    },

    removeList: function () {
      window.similarListElement.innerHTML = '';
      if (window.searchboxText.value) {
        window.searchboxText.value = '';
      }
    }

  };

  function getList(collaboratorsData) {
    var listElement = similarListTemplate.cloneNode(true);
    if (collaboratorsData.name) {
      listElement.querySelector('.collaborator').textContent = collaboratorsData.name;
    } else {
      listElement.querySelector('.collaborator').textContent = collaboratorsData;
    }
    return listElement;
  }

})();
