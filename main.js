import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
    <div class="advice-content">
      <h3>ADVICE #117</h3>
      <p class="advice">
      "It is easy to sit up and take notice, what's difficult is getting up and take action."
      </p>
      <hr class="separator"></hr>
      <button class="quote-button"><span><iconify-icon icon="arcticons:quoteunquote" width="60" height="60"></iconify-icon></span></button>
    </div>
`

setupCounter(document.querySelector('#counter'))
