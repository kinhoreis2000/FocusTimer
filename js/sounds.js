export default function ( ) {

  const forestAudio = new Audio("./songs/Floresta.wav")
  const rain = new Audio("./songs/Chuva.wav")
  const coffeeShop = new Audio("./songs/Cafeteria.wav")
  const fireplace = new Audio("./songs/Lareira.wav")

  const inputForestVolume = document.querySelector('#forest-volume')
  const inputRainVolume = document.querySelector('#rain-volume')
  const inputCoffeeShopVolume = document.querySelector('#coffee-shop-volume')
  const inputFireplaceVolume = document.querySelector('#fireplace-volume')
  
  inputForestVolume.addEventListener("input", setAudioVolume)
  inputRainVolume.addEventListener("input", setAudioVolume)
  inputCoffeeShopVolume.addEventListener("input", setAudioVolume)
  inputFireplaceVolume.addEventListener("input", setAudioVolume)


  function playForestAudio() {
    rain.pause()
    coffeeShop.pause()
    fireplace.pause()
    forestAudio.play()
  }
  function playRain() {
    rain.play()
    coffeeShop.pause()
    fireplace.pause()
    forestAudio.pause()
  }
  function playCoffeeShop() {
    rain.pause()
    coffeeShop.play()
    fireplace.pause()
    forestAudio.pause()
  }
  function playFirePlace() {
    rain.pause()
    coffeeShop.pause()
    fireplace.play()
    forestAudio.pause()
  }


  function setAudioVolume() {

    forestAudio.volume = inputForestVolume.value
    rain.volume = inputRainVolume.value
    coffeeShop.volume = inputCoffeeShopVolume.value
    fireplace.volume = inputFireplaceVolume.value

  }

  return {
    playForestAudio,
    playRain,
    playCoffeeShop,
    playFirePlace,
    setAudioVolume
  }
}

