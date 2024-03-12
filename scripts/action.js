import { commandInput, terminal } from '../main'
import { data } from './data'

export const action = function (event) {
  if (event.key === 'Enter') {

    const command = commandInput.value.trim().toLowerCase()

    if (command === 'clear') {
      terminal.innerHTML = ''

    } else if (command === 'help') {
      terminal.innerHTML += data.help

    } else if (command === 'social') {
      terminal.innerHTML += data.social

    } else if (command === 'repo') {
      terminal.innerHTML += data.repo

    } else if (command === 'banner') {
      terminal.innerHTML += data.banner

    } else {
      terminal.innerHTML += `
      <div class="prompt__container">
        <span class="prompt">Shubh@Terminal:~$  ${command}</span>
      </div>
      <p>
         Command not found :
         <span class="wrong__command">${command}</span>, For list of commands, Type
         <span class="text__shadow">'help'</span>.
      </p>`

    }
    commandInput.value = ''
  }
}