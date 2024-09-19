import './main.css'
import 'web-essential-ui/style.css'
import registerWebComponents from 'web-essential-ui'

registerWebComponents()

document.querySelector('#app').innerHTML = `
  <div>
    Hola mundo
  </div>
`

