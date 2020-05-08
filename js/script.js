/// hamburger menu 
const hamburger = document.querySelector('.hamburger')
const modalNavi = document.querySelector('.modal')
const links = document.querySelectorAll('.modal__navi__list__item__link');

function showModal() {
  hamburger.classList.toggle('open');
  modalNavi.classList.toggle('hide');
}

hamburger.addEventListener('click', showModal);
links.forEach(el => el.addEventListener('click', showModal))
