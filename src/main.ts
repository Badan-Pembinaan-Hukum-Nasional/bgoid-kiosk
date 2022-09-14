import './style.css'
import QrSurvey from './assets/qr_survei.png'
import QrGuestbook from './assets/guestbook.png'
import socialAccountsComponent from "./socials";
import Logos from "./logos";
import Plyr from "plyr";
import "plyr/dist/plyr.css"

let date = new Date();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="wrapper">
    <h5 class="welcome-text">BPHN Kiosk</h5>
    <section class="video-wrapper">
        <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="p75OXdkxzvc"></div>   
    </section>
    
    <section class="external-links">
          <figure>
            <div class="external-links--card">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeozN3ervNQl9Y9a1iVjN7w66z3Dg3_NrCcbuDU4UEGmM6KzA/viewform">
                    <img src="${QrGuestbook}" alt="Link Buku Tamu">
                </a>
            </div>
            <figcaption>Buku Tamu</figcaption>
          </figure>
          <figure>
            <div class="external-links--card">
                <a href="https://survei.balitbangham.go.id/layanan/450645ee-10d6-11ed-c0e0-323033393538/3ff48bda-4b87-11eb-a51f-323334333033/3e9dbc9e-b776-11e9-b8b2-313834333239/32ce8a8a-e65e-11e9-a50d-313131393436">
                    <img src="${QrSurvey}" alt="Link Survei IPK & IKM">
                </a>
            </div>
            <figcaption>Survei IKM & IPK</figcaption>
          </figure>
    </section>
    <section class="touchpoint-links">
    ${socialAccountsComponent()}
    </section>
    <section class="logos">
        ${Logos()}
    </section>
    <footer>
        <p>&copy; BPHN ${date.getFullYear()}</p><p>Crafted by <a href="https://fransfp.dev">Us</a></p>
    </footer>
  </div>`

const player = new Plyr('#player', {
    autoplay:true,
    loop:{
        active: true
    }
});
// @ts-ignore
window.player = player;
