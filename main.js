import { fetchAdvice } from './fetchAdvice'
import './style.css'

const $ = selector => document.querySelector(selector)


$('#app').innerHTML = `
    <div class="advice-content">
    <h3>ADVICE #<span class="advice-id">117</span></h3>
      <p class="advice">
      "It is easy to sit up and take notice, what's difficult is getting up and take action."
      </p>
      <img src="separator.PNG"></img>
      <button class="quote-button"><img class="image-button" src="button.PNG"></img></button>
    </div>
`

$('.quote-button').addEventListener('click', async () => {
  const response = await fetchAdvice()
  $('.advice-id').innerHTML = response.slip.id
  $('.advice').innerHTML = `"${response.slip.advice}"`
})