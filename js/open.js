'use strict';

(function () {

  var ENTER_KEYCODE = 13;

  var main = document.querySelector('.main');
  var pageFind = document.querySelector('.page-find');
  var goMainPage = pageFind.querySelector('.go-main-page');
  var searchboxButton = document.querySelector('.searchbox-button');
  var collaborators = document.querySelector('.collaborators');
  var information = document.querySelector('.information');
  var data;

  main.addEventListener('click', openPageFind);

  function openPageFind(evt) {
    var target = evt.target;
    if (target.tagName === 'A') {
      data = window.find.findCollaborators(window.data.array, target.textContent);
      window.list.printList(data);
      if (main.classList.contains('hidden')) {
        window.preview.deeiteInfo();
        closeInformation();
      } else {
        closeMain();
      }
      openWindowFind();
    } else {
      return;
    }
  }

  function openMain(evt) {
    var target = evt.target;
    if (target.tagName === 'IMG' || target.tagName === 'SPAN') {
      window.list.removeList();
      openWindowMain();
    } else {
      return;
    }
  }

  function openInformation(evt) {
    var target = evt.target;
    if (target.classList.contains('collaborator')) {
      window.list.removeList();
      openWindowInformation();
      window.preview.printInfo(data, evt);
    } else {
      return;
    }
  }

  function openWindowFind() {
    pageFind.classList.remove('hidden');
    collaborators.addEventListener('click', openInformation);
    goMainPage.addEventListener('click', openMain);
    searchboxButton.addEventListener('click', window.find.sortsCollaborators);
    window.searchboxText.addEventListener('keydown', onEnterPress);
  }

  function closeMain() {
    main.classList.add('hidden');
    main.removeEventListener('click', openPageFind);
  }

  function closeInformation() {
    information.classList.add('hidden');
    information.removeEventListener('click', openPageFind);
  }

  function openWindowMain() {
    pageFind.classList.add('hidden');
    main.classList.remove('hidden');
    main.addEventListener('click', openPageFind);
    collaborators.removeEventListener('click', openInformation);
    goMainPage.removeEventListener('click', openMain);
    searchboxButton.removeEventListener('click', window.find.sortsCollaborators);
    window.searchboxText.removeEventListener('keydown', onEnterPress);
  }

  function openWindowInformation() {
    information.classList.remove('hidden');
    pageFind.classList.add('hidden');
    information.addEventListener('click', openPageFind);
    collaborators.removeEventListener('click', openInformation);
    goMainPage.removeEventListener('click', openMain);
    searchboxButton.removeEventListener('click', window.find.sortsCollaborators);
    window.searchboxText.removeEventListener('keydown', onEnterPress);
  }

  function onEnterPress(evt) {
    if (evt.keyCode === ENTER_KEYCODE && evt.target === window.searchboxText) {
      window.find.sortsCollaborators();
    }
  }

})();
