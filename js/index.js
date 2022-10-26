import sounds from "./sounds.js"

const buttonPlay = document.querySelector(".button-play")
const buttonStop = document.querySelector(".button-stop")
const buttonPause = document.querySelector(".button-pause")
const buttonPlus = document.querySelector(".button-plus")
const buttonMinus = document.querySelector(".button-minus")
let minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const changeToDarkbuttonPause = document.querySelector(".button-pause svg path")
const changeToDarkbuttonStop = document.querySelector(".button-stop svg path")
const changeToDarkbuttonPlay = document.querySelector(".button-play svg path")
const changeToDarkbuttonPlus = document.querySelector(".button-plus svg path")
const changeToDarkbuttonMinus = document.querySelector(".button-minus svg path")

const buttonForest = document.querySelector(".sound-cards .forest")
const buttonRain = document.querySelector(".sound-cards .rain")
const buttonCoffeeShop = document.querySelector(".coffee-shop")
const buttonFireplace = document.querySelector(".fireplace")

const forestButtonColor = document.querySelector(".forest svg path")
const coffeeShopButtonColor = document.querySelector(".coffee-shop svg path")
const firePlaceColor = document.querySelector(".fireplace svg path")
const rainButtonColor = document.querySelector(".rain svg path")

const selectedforestButtonColor = document.querySelector(".forest ")
const selectedcoffeeShopButtonColor = document.querySelector(".coffee-shop ")
const selectedfirePlaceColor = document.querySelector(".fireplace ")
const selectedrainButtonColor = document.querySelector(".rain ")

const body= document.body
const sunIcon = document.querySelector(".sun")
const moonIcon = document.querySelector(".moon")
const AllTimerDisplay = document.querySelector(".time")


let timerTimeOut
const Sounds = sounds()

buttonPlay.addEventListener("click", clickOnPlay)
buttonPause.addEventListener("click", clickOnPause)
buttonStop.addEventListener("click", clickOnStop)
buttonMinus.addEventListener("click", clickOnMinus)
buttonPlus.addEventListener("click", clickOnPlus)

buttonForest.addEventListener("click", clickOnForest)
buttonCoffeeShop.addEventListener("click", clickOnCoffeeShop)
buttonRain.addEventListener("click", clickOnRain)
buttonFireplace.addEventListener("click", clickOnFirePlace)

sunIcon.addEventListener("click", darkMode)
moonIcon.addEventListener("click", sunMode)

  
  
let isItDark


function darkMode() {
  isItDark = true
  sunIcon.classList.toggle("hide")
  moonIcon.classList.toggle("hide")
  body.classList.add("dark")
  AllTimerDisplay.classList.add("dark")
  selectedforestButtonColor.classList.add("dark")
  selectedcoffeeShopButtonColor.classList.add("dark")
  selectedfirePlaceColor.classList.add("dark")
  selectedrainButtonColor.classList.add("dark")

  buttonPlus.classList.add("dark")


  rainButtonColor.setAttribute("fill", "#ffffff")
  firePlaceColor.setAttribute("fill", "#ffffff")
  coffeeShopButtonColor.setAttribute("fill", "#ffffff")
  forestButtonColor.setAttribute("fill", "#ffffff")
  
  changeToDarkbuttonPause.setAttribute("fill", "#ffffff")
  changeToDarkbuttonStop.setAttribute("fill", "#ffffff")
  changeToDarkbuttonPlay.setAttribute("fill", "#ffffff")
  changeToDarkbuttonPlus.setAttribute("fill", "#ffffff")
  changeToDarkbuttonMinus.setAttribute("fill", "#ffffff")
  resetDefaultInDark ()

  console.log(isItDark)
}
function sunMode() {
  isItDark = false
  sunIcon.classList.toggle("hide")
  moonIcon.classList.toggle("hide")
  body.classList.remove("dark")
  AllTimerDisplay.classList.remove("dark")

  selectedforestButtonColor.classList.remove("dark")
  selectedcoffeeShopButtonColor.classList.remove("dark")
  selectedfirePlaceColor.classList.remove("dark")
  selectedrainButtonColor.classList.remove("dark")


  rainButtonColor.setAttribute("fill", "black")
  firePlaceColor.setAttribute("fill", "black")
  coffeeShopButtonColor.setAttribute("fill", "black")
  forestButtonColor.setAttribute("fill", "black")
  
  changeToDarkbuttonPause.setAttribute("fill", "black")
  changeToDarkbuttonStop.setAttribute("fill", "black")
  changeToDarkbuttonPlay.setAttribute("fill", "black")
  changeToDarkbuttonPlus.setAttribute("fill", "black")
  changeToDarkbuttonMinus.setAttribute("fill", "black")
  resetDefaultInSun ()
  console.log(isItDark)

}

function resetDefaultInDark (){
  selectedforestButtonColor.classList.add("dark")
  selectedcoffeeShopButtonColor.classList.add("dark")
  selectedfirePlaceColor.classList.add("dark")
  selectedrainButtonColor.classList.add("dark")


  rainButtonColor.setAttribute("fill", "white")
  firePlaceColor.setAttribute("fill", "white")
  coffeeShopButtonColor.setAttribute("fill", "white")
  forestButtonColor.setAttribute("fill", "white")
  
}
function resetDefaultInSun (){
  selectedforestButtonColor.classList.remove("selected")
  selectedcoffeeShopButtonColor.classList.remove("selected")
  selectedfirePlaceColor.classList.remove("selected")
  selectedrainButtonColor.classList.remove("selected")


  rainButtonColor.setAttribute("fill", "black")
  firePlaceColor.setAttribute("fill", "black")
  coffeeShopButtonColor.setAttribute("fill", "black")
  forestButtonColor.setAttribute("fill", "black")
  
}

function resetDefault () {

if (isItDark == true) {
  resetDefaultInDark ()
  
} else {
  resetDefaultInSun ()
}
   
 

}


function isTheNumberCorrect() {
  let minutes = Number(minutesDisplay.textContent)
  if (minutes < 0) {
    minutesDisplay.textContent = 0
  }
  
}

function clickOnPlay() {
  
  buttonPlay.classList.toggle("hide")
  buttonPause.classList.toggle("hide")
  
  countdown()
  
  function countdown() {
    
    isTheNumberCorrect()
    let seconds = secondsDisplay.textContent
    let minutes = minutesDisplay.textContent 
    
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
    minutesDisplay.textContent = String(minutes).padStart(2,"0")
    
    timerTimeOut = setTimeout(() => {
      
    seconds--
    secondsDisplay.textContent = seconds
    
    
    if(seconds < 0){
      minutes--
      secondsDisplay.textContent = 59
      minutesDisplay.textContent = minutes
    }
    countdown()
    
    if(minutes == 0 && secondsDisplay.textContent <= 0) {
      clearTimeout(timerTimeOut)
    }
    
  },1000)
}

}

function clickOnPause() {
  buttonPlay.classList.toggle("hide")
  buttonPause.classList.toggle("hide")
  
  clearTimeout(timerTimeOut)
}

function clickOnStop() {
  let seconds = secondsDisplay.textContent
  
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  clearTimeout(timerTimeOut)
  secondsDisplay.textContent = seconds 
  
  minutesDisplay.textContent = 25
  seconds = 0
  
  secondsDisplay.textContent = String(seconds).padStart(2,"0")
  
  
}
function clickOnPlus() {
  let minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String((minutes + 5)).padStart(2,"0")
}
function clickOnMinus() {
  let minutes = Number(minutesDisplay.textContent)
  
  
  minutesDisplay.textContent = String((minutes - 5)).padStart(2,"0")
  
}

function clickOnForest() {
  resetDefault ()
  Sounds.playForestAudio()
  forestButtonColor.setAttribute("fill", "white")
  selectedforestButtonColor.setAttribute("class", "selected")
}
function clickOnCoffeeShop() {
  resetDefault ()
  Sounds.playCoffeeShop()
  coffeeShopButtonColor.setAttribute("fill", "white")
  selectedcoffeeShopButtonColor.setAttribute("class", "selected")
  
}
function clickOnRain() {
  resetDefault ()
  Sounds.playRain()
  rainButtonColor.setAttribute("fill", "white")
  selectedrainButtonColor.setAttribute("class", "selected")
  
}
function clickOnFirePlace() {
  resetDefault ()
  Sounds.playFirePlace()
  firePlaceColor.setAttribute("fill", "white")
  selectedfirePlaceColor.setAttribute("class", "selected")
  
}


