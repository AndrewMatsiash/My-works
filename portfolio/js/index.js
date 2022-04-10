import i18Obj from './translate.js';

// const enBtn = document.querySelector('.switch__language-en')
// const ruBtn = document.querySelector('.switch__language-ru')
// let lang = document.documentElement.lang;

// function setocalStorage() {
//   localStorage.setItem('lang',lang)
// }

// window.addEventListener('beforeunload' , setLocalStorage)

// function getLocalStorage(params) {
//   if (localStorage.getItem('lang')) {
//     lang = localStorage.getItem('lang');
//     if (lang = 'en') {
//       ruBtn.classList.remove('active')
//       enBtn.classList.add('active')
//      getTranslate()
//     }   
//   }else if (lang == "ru"){
//     enBtn.classList.remove('active')
//     ruBtn.classList.add('checked')
//     getTranslate()
//   }
//   }


 






//Меню бургер
////////////////////////////////////////////////////////
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu__list');
const navLinks = document.querySelectorAll('.menu__link');

function toggleMenu() {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);


function closeMenu(event) {
  if (event.target.classList.contains('menu__link')) {
    // здесь код, удаляющий класс `'open'` у гамбургер-иконки и у меню
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  }
}
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

//Смена фотографий по клику
/////////////////////////////////////////////
const portfolioBtn = document.querySelector('.menu-portfolio__btn')
const portfolioImages = document.querySelectorAll('.portfolio-img')
const portfolioBtns = document.querySelector('.menu-portfolio__btns')
const portfolioActiveBtn = document.querySelectorAll('.menu-portfolio__btn')


function changeImage(event) {
  if (event.target.classList.contains('menu-portfolio__btn')) {
    portfolioImages.forEach((img, index) => {
      img.src = `./img/${event.target.dataset.season}/${index + 1}.jpg`
    });
  }
  portfolioActiveBtn.forEach((el) => {
    el.classList.remove('active')
  })
  event.target.classList.add('active')
}

portfolioBtns.addEventListener('click', changeImage)

//Смена языка 
///////////////////////////////////////////////////////////
const btnLang = document.querySelector('.switch__languages')
const btnLangs = document.querySelectorAll('.switch__language')
function getTranslate(lang) {
  if (lang.target.classList.contains('switch__language-ru')) {
    const dataI18 = document.querySelectorAll('[data-i18]')
    dataI18.forEach((el) => {
      el.textContent = i18Obj['ru'][el.dataset.i18]
      if (el.placeholder) {
        el.placeholder = i18Obj['ru'][el.dataset.i18]
        el.textContent = ''
      }
    })
  }
  else if (lang.target.classList.contains('switch__language-en')) {
    const dataI18 = document.querySelectorAll('[data-i18]')
    dataI18.forEach((el) => {
      el.textContent = i18Obj['en'][el.dataset.i18]
      if (el.placeholder) {
        el.placeholder = i18Obj['en'][el.dataset.i18]
        el.textContent = ''
      }
    })
  }
}

function changeClass(event) {
  btnLangs.forEach((el) => {
    el.classList.remove('active')
  })
  event.target.classList.add('active')
}

btnLang.addEventListener('click', getTranslate)
btnLang.addEventListener('click', changeClass)


//Переключение темы

// const element = document.querySelector('.skills');
// element.classList.add('light-theme')
const litghTeheme = ["main", "body", "hero", "footer__container", "header__container", "theme-img", "menu__list", "line1", "line3"]

const titleLightTheme = document.querySelectorAll('.title')
const portfolioLightThemeBtn = document.querySelectorAll('.menu-portfolio__btn')
const imgTheme = document.querySelector('.theme-img');


//Функция добавляет класс всем элементам в Nodlist
function addClassLightTheme(element) {
  element.forEach((el) => {
    el.classList.toggle('light-theme')
  })
}

imgTheme.addEventListener('click', (event) => {
  litghTeheme.forEach((el) => {
    document.querySelector(`.${el}`).classList.toggle('light-theme')
    addClassLightTheme(portfolioLightThemeBtn)
    addClassLightTheme(titleLightTheme)
  })
  if (event.target.classList.contains('light-theme')) {
    imgTheme.src = './img/icons/moon.svg'
  } else {
    imgTheme.src = './img/icons/sun.svg'
  }
})

