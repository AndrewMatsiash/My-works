const memoryGame = document.querySelector(".memory-game");
const cards = document.querySelectorAll(".memory-card");
const tableRecords = document.querySelector(".table__records");
const bodyTableRecords = document.querySelector(".body__table-records");
let hasFlippedCard = false;
let boardLocked = false;
let firstCard, secondCard;
const moves = document.querySelector(".moves");
const startBtn = document.querySelector(".start-btn");
const audio = new Audio();

//Добавляет класс active
const addedClassActive = (element) =>{
element.classList.add("active");
}

//Воспроизводит переданный звук
const playSound = (element) =>{
  audio.src =`${element}`
  audio.play()
}


 
const offOnsound = document.querySelector('.sound')

let hasPause = true
//выкл вкл звук
 const muteSound = () =>{
   hasPause = !hasPause;
   if (hasPause) {
      audio.volume = 0
   }else if (!hasPause){
     audio.volume = 1
   }
 }

 //Смена иконки при отсутсвии звука
 const iconChance = () =>{
   if (hasPause) {
     offOnsound.src = './assets/img/svg/mute.svg'
   }else{
      offOnsound.src = './assets/img/svg/wondicon-ui-free-speaker_111240.svg'
   }
 }

 offOnsound.addEventListener('click',muteSound)
 offOnsound.addEventListener('click',iconChance)


const startSoundTrack = './assets/mersedes-muzyka-iz-reklamy.mp3'
const finishSoundTrake = './assets/finish.mp3'
function playSoundstart() {
  addedClassActive(memoryGame) 
  addedClassActive(startBtn)
  addedClassActive(tableRecords)
  addedClassActive(moves)
  playSound(startSoundTrack)
  audio.autoplay()
}

startBtn.addEventListener("click", playSoundstart);

//проверка,если localStorage  пустой то присвой ему пустой массив.
//достаю данные из local storage и вывожу их на странице.
let results = JSON.parse(localStorage.getItem("clicks"));
if (results === null) {
  results = [];
}

const showsTableTenGame = () => {
  //функция создает 10 элементов таблицы циклом
  for (let i = 0; i < results.length; i++) {
    let list = document.createElement("tr"); //создал элемент таблицы
    list.className = "table-records__tr"; //дал ему класс
    list.innerHTML = `<td class = 'table-records-td'>${[i + 1]} игра </td> 
<td class = 'table-records-td'>${results[i].numberOfClick} ходов </td>`; //добавил в tr>td  c номером игры ,c результатом ходов.
    bodyTableRecords.appendChild(list); //поместил внутрь элемента tbody,tr>td
  }
};
showsTableTenGame();

let records = showsTableTenGame;

// const moves = document.querySelector('.moves')

//считает клики и записывает результат в обьект.
let clicks = 0; //счетчик кликов
function matchclick() {
  clicks++;
  result.numberOfClick = clicks;
  moves.innerHTML = `Количество ходов : ${clicks}`;
}



//обьект с кликами
let result = {
  numberOfClick: clicks,
};

const flipCard = (event) => {
  if (boardLocked) return;

  const target = event.target.parentElement;

  if (target === firstCard) return;

  target.classList.add("flip");

  if (!hasFlippedCard) {
    //First click
    hasFlippedCard = true;
    firstCard = target;
  } else {
    //second click
    hasFlippedCard = false;
    secondCard = target;
    matchclick();
    //check for match
    checkForMatch();
  }
};

const checkForMatch = () => {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    matchCounter++;
    console.log(matchCounter);
    finishGame();

    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  } else {
    boardLocked = true;

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1000);
  }
};

const resetBoard = () => {
  // [hasFlippedCard,boardLocked] = [false,false];
  // [firstCard,secondCard] = [null,null];
  hasFlippedCard = boardLocked = false;
  firstCard = secondCard = null;
};

cards.forEach((card) => {
  //Add Event Listener to every card
  card.addEventListener("click", flipCard);
  const randomIndex = Math.floor(Math.random() * cards.length);
  card.style.order = randomIndex;
});

//счетчик окончания игры
let matchCounter = 0;

function finishGame() {
  if (matchCounter === 6) {
     playSound(finishSoundTrake)
    moves.innerHTML = "Вы отгадали все пары!";
    results.push(result);
    // results.sort((a, b) => {
    //   return a.numberOfClick - b.numberOfClick;
    // });
    results.length > 10 ? results.pop() : null;
    // results.length > 10 ? localStorage.clear():null
    localStorage.setItem("clicks", JSON.stringify(results));

    setTimeout(() => {
      location.reload();
    }, 6000);
  }
}
