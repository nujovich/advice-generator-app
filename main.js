import { fetchAdvice } from './fetchAdvice'
import './style.css'

const $ = selector => document.querySelector(selector)

window.onload = async () => {
  const response = await fetchAdvice()
  $('.advice-id').innerHTML = response.slip.id
  $('.advice').innerHTML = `"${response.slip.advice}"`
}
  

$('#app').innerHTML = `
    <div class="advice-content">
    <h3>ADVICE #<span class="advice-id"></span></h3>
      <p class="advice">
      </p>
      <img class="pattern-divider-desktop" src="/pattern-divider-desktop.svg" alt="Divider"></img>
      <img class="pattern-divider-mobile" src="/pattern-divider-mobile.svg" alt="Divider"></img>
      <div class="dice-container"><img class="dice-button" src="/icon-dice.svg" alt="Icon Dice"></img></div>
    </div>
`

$('.dice-button').addEventListener('click', async () => {
  const response = await fetchAdvice()
  $('.advice-id').innerHTML = response.slip.id
  $('.advice').innerHTML = `"${response.slip.advice}"`
})