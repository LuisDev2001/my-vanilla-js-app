import './assets/main.css'
import 'web-essential-ui/style.css'
import { registerEssentialComponents } from 'web-essential-ui'

registerEssentialComponents()

let payload = null

document.querySelector('#app').innerHTML = `
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Registro al evento</h1>
    <form id="registerForm">
      <div class="mx-60">
        <div class="mb-4">
          <e-input id="txtName" type="text" name="name" placeholder="Escribe tus nombres"></e-input>
        </div>
        <div class="mb-4">
          <e-input id="txtLastName" type="text" name="lastname" placeholder="Escribe tus apellidos"></e-input>
        </div>
        <div class="mb-4">
          <e-input id="textEmail" type="email" name="email" placeholder="Correo"></e-input>
        </div>
        <div class="mb-4">
          <p class="text-left mb-4 text-lg">
            ¿Donde te enteraste del evento?
          </p>
          <e-radio id="sc-fb" label="Facebook" value="fb" name="socialMedia"></e-radio>
          <e-radio id="sc-tw" label="Twitter" value="tw" name="socialMedia"></e-radio>
          <e-radio id="sc-ig" label="Instagram" value="ig" name="socialMedia"></e-radio>
        </div>
        <div class="mb-4">
          <p class="text-left mb-4 text-lg">Selecciona tu Ciudad</p>
          <e-select id="cityList" name="city"></e-select>
        </div>
        <div class="flex justify-end">
          <e-button size="md">
            Registrarme
          </e-button>
        </div>
      </div>
    </form>
  </div>
`

document.querySelectorAll('e-radio[name="socialMedia"]').forEach(radio => {
  radio.addEventListener('update:modelValue', (e) => {
    payload = {
      ...payload,
      socialMedia: e.detail
    }
  })
})

document.querySelector('e-select#cityList').addEventListener('update:modelValue', (e) => {
  payload = {
    ...payload,
    city: e.detail[0]
  }
})

document.querySelector('#registerForm').addEventListener('submit', (e) => {
  e.preventDefault()
  const form = new FormData(e.target)
  const data = Object.fromEntries(form)
  payload = {
    ...payload,
    ...data
  }

  console.log(payload)
})

function loadCities () {
  const $selectCity = document.querySelector('#cityList')
  const citiesOfPeru = [
    { name: 'Lima', code: 'LM' },
    { name: 'Miraflores', code: 'MF' },
    { name: 'San Isidro', code: 'SI' },
    { name: 'Chorrillos', code: 'CH' },
    { name: 'San Martin de Porres', code: 'SM' },
  ]
  $selectCity.items = citiesOfPeru
}

document.addEventListener('DOMContentLoaded', () => {
  loadCities()
})

