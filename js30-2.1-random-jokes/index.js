const button = document.querySelector('.quote-btn')
const quoteText = document.querySelector('.quote-text')
const btnLangs = document.querySelectorAll('.switch__language')
const btnLang = document.querySelector('.switch__languages')
const translateRu = document.querySelector(".switch__language-ru")
const translateEn = document.querySelector(".switch__language-en")
const boxRotate = document.querySelector(".quote__box")
const url = 'https://type.fit/api/quotes'
const quotes = 'data.json'

function changeClass(event) {
  if (event.target.classList.contains('switch__language-ru')) {
    translateEn.classList.remove('active')
    translateRu.classList.add('active')
  } else if (event.target.classList.contains('switch__language-en')) {
    translateRu.classList.remove('active')
    translateEn.classList.add('active')
  }

}
btnLang.addEventListener('click', changeClass)




async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showRandomData(data)
  console.log(data);

}
getData();

async function getQuotes() {
  const res = await fetch(quotes);
  const data = await res.json();
  showRandomData(data)
  console.log(data);
}
getQuotes();


function showRandomData(data) {
  quoteText.textContent = data[Math.floor(Math.random() * data.length)].text;
}


button.addEventListener('click', () => {
  if (translateRu.classList.contains('active')) {
    getQuotes()
  } else if (translateEn.classList.contains('active')) {
    getData()
  }
boxRotate.classList.toggle("rotate")
})


translateRu.addEventListener('click', () => {
  getQuotes()
})


translateEn.addEventListener('click', () => {

  getData()
})

