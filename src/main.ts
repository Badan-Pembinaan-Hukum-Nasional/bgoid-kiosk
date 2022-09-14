import './style.css'
import QrSurvey from './assets/qr_survei.png'
import QrGuestbook from './assets/guestbook.png'
import socialAccountsComponent from "./socials";
import Logos from "./logos";
import Plyr from "plyr";



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="wrapper">
    <h5 class="welcome-text">Selamat Datang di BPHN</h5>
  <div id="player" class="video-wrapper" data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
    <section class="external-links">
          <figure>
            <div class="external-links--card">
                <a href="https://google.com">
                    <img src="${QrGuestbook}" alt="Link Buku Tamu">
                </a>
            </div>
            <figcaption>Buku Tamu</figcaption>
          </figure>
          <figure>
            <div class="external-links--card">
                <a href="#">
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
  </div>`

const player = new Plyr('#player', {});

// Expose player so it can be used from the console
// @ts-ignore
window.player = player;