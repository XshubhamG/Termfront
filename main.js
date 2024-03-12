import { action } from './scripts/action'
import './style.css'

document.querySelector('#app').innerHTML = `
    <main>
      <div id="terminal">
      <section class="section__container">
         <pre>
 ██████╗ ██████╗ ██████╗ ██╗███╗   ██╗   ███╗   ██╗███████╗██████╗ ██████╗
██╔════╝██╔═══██╗██╔══██╗██║████╗  ██║   ████╗  ██║██╔════╝██╔══██╗██╔══██╗
██║     ██║   ██║██║  ██║██║██╔██╗ ██║   ██╔██╗ ██║█████╗  ██████╔╝██║  ██║
██║     ██║   ██║██║  ██║██║██║╚██╗██║   ██║╚██╗██║██╔══╝  ██╔══██╗██║  ██║
╚██████╗╚██████╔╝██████╔╝██║██║ ╚████║██╗██║ ╚████║███████╗██║  ██║██████╔╝
╚═════╝ ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═════╝ <span class="text__shadow">@ ${new Date().getFullYear()}</span></pre>
         <p>
         Welcome to my Interactive terminal website, <span class="text__shadow">Termfront</span>
         </p>
         <p>For list of avaiable commands, type <span class="text__shadow">'help'</span></p>
      </section>
      </div>
        <div class="prompt__container">
        <span class="prompt">Shubh@Terminal:~$ </span>
        <input id="command-input" autofocus type="text" />
      </div>
    </main>
`

export const terminal = document.getElementById('terminal')
export const commandInput = document.getElementById('command-input')

commandInput.addEventListener('keydown', action)