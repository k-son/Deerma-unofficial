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


/// Accept privacy policy with 'enter' key

const akceptacja = document.getElementById('akceptacja');

function accept(e) {
  if (e.keyCode == 13) {
    akceptacja.click();
  }
}

akceptacja.addEventListener('keydown', accept);
