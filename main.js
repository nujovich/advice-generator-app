import { fetchAdvice } from './fetchAdvice'
import './style.css'

const $ = selector => document.querySelector(selector)

const response = async () => {
  return await fetchAdvice()
}

const slip = await response().then(response => response.slip)

$('#app').innerHTML = `
    <div class="advice-content">
    <h3>ADVICE #<span class="advice-id">${slip.id}</span></h3>
      <p class="advice">
      "${slip.advice}"
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