const playBtn = document.querySelector('.pause-btn')
const audio = document.querySelector('.audio')
const foto = document.querySelector('.foto__nature')
const linkNameBirds = document.querySelectorAll('.menu__link')
const nameBirds = document.querySelector('.menu__list')
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu__list');
const navLinks = document.querySelectorAll('.menu__link');


function playAudio() {
  audio.currentTime = 0
  audio.play()
}

function pauseAudio() {
  audio.pause()
}

function changeClass(event) {
  linkNameBirds.forEach((el) => {
    el.classList.remove('active')
  })
  event.target.classList.add('active')
}

function playPause(event) {
  if (event.target.classList.contains('play-btn')) {
    playAudio()
  } else {
    pauseAudio()
  }
}

function toggleClassBtn(event) {
  event.target.classList.toggle('play-btn')
  if (event.target.classList.contains('play-btn')) {
    playAudio()
  } else {
    pauseAudio()
  }
}


///////Menu Burger
function toggleMenu() {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);


function closeMenu(event) {
  if (event.target.classList.contains('menu__link')) {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  }
}
navLinks.forEach((el) => el.addEventListener('click', closeMenu));
///////////////////////////////////////////////////////////////////////////////////////


nameBirds.addEventListener("click", changeClass)
playBtn.addEventListener('click', toggleClassBtn)


const solovei = document.querySelector('.solovei')
solovei.addEventListener("click", () => {
  foto.style.backgroundImage = "url('./assets/img/solovey.jpg')"
  audio.src = './assets/audio/solovey.mp3'
  solovei.classList.add('play-btn')
  if (solovei.classList.contains('play-btn')) {
    playBtn.classList.add('play-btn')
    playAudio()
  } else {
    playBtn.classList.remove('play-btn')
    pauseAudio()
  }
})

// solovei.addEventListener('click', toggleClassActive)


const drozd = document.querySelector('.drozd')
drozd.addEventListener("click", () => {
  foto.style.backgroundImage = "url('./assets/img/drozd.jpg')"
  audio.src = './assets/audio/drozd.mp3'
  drozd.classList.add('play-btn')
  if (drozd.classList.contains('play-btn')) {
    playBtn.classList.add('play-btn')
    playAudio()
  } else {
    playBtn.classList.remove('play-btn')
    pauseAudio()
  }
})
// drozd.addEventListener('click',toggleClassActive)
// drozd.addEventListener('click', playAudio)

const malinovka = document.querySelector('.malinovka')
malinovka.addEventListener("click", () => {
  foto.style.backgroundImage = "url('./assets/img/forest.jpg')"
  audio.src = './assets/audio/forest.mp3'
  malinovka.classList.add('play-btn')
  if (malinovka.classList.contains('play-btn')) {
    playBtn.classList.add('play-btn')
    playAudio()
  } else {
    playBtn.classList.remove('play-btn')
    pauseAudio()
  }
})
// malinovka.addEventListener('click',toggleClassBtn)
// malinovka.addEventListener('click', playAudio)

const javoronok = document.querySelector('.javoronok')
javoronok.addEventListener("click", () => {
  foto.style.backgroundImage = "url('./assets/img/javoronok.jpg')"
  audio.src = './assets/audio/javoronok.mp3'
  javoronok.classList.add('play-btn')
  if (javoronok.classList.contains('play-btn')) {
    playBtn.classList.add('play-btn')
    playAudio()
  } else {
    playBtn.classList.remove('play-btn')
    pauseAudio()
  }
})
// javoronok.addEventListener('click',toggleClassBtn)
// javoronok.addEventListener('click', playPause)


const slavka = document.querySelector('.slavka')
slavka.addEventListener("click", () => {
  foto.style.backgroundImage = "url('./assets/img/slavka.jpg')"
  audio.src = './assets/audio/slavka.mp3'
  slavka.classList.add('play-btn')
  if (slavka.classList.contains('play-btn')) {
    playBtn.classList.add('play-btn')
    playAudio()
  } else {
    playBtn.classList.remove('play-btn')
    pauseAudio()
  }
})
// slavka.addEventListener('click',toggleClassBtn)
// slavka.addEventListener('click', playPause)
