import './style.css'
import QrSurvey from './assets/qr_survey.png'
import QrGuestbook from './assets/qr_guestbook.png'
import socialAccountsComponent from "./socials";
import Logos from "./logos";
import Plyr from "plyr";
import "plyr/dist/plyr.css"

let date = new Date();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="wrapper">
    <section class="welcome-text">
        <div class="welcome-text--head">
            <div>
            <h5 class="welcome-text--head__greet">Selamat Datang, </h5>
            <h6 class="welcome-text--head__second">di Badan Pembinaan Hukum Nasional.</h6>
            </div>
        </div>
    </section>
    <section class="video-wrapper">
        <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="p75OXdkxzvc"></div>   
    </section>
    
    <section class="external-links">
          <figure class="external-links--card">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeozN3ervNQl9Y9a1iVjN7w66z3Dg3_NrCcbuDU4UEGmM6KzA/viewform">
               <img src="${QrGuestbook}" alt="Link Buku Tamu">    
            </a>
            <figcaption>Buku Tamu</figcaption>
          </figure>
          <figure class="external-links--card">
            <a target="_blank" href="https://bit.ly/3Dv5eOi">
                <img src="${QrSurvey}" alt="Link Survei IPK & IKM">
            </a>            
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
        <p>&copy; BPHN ${date.getFullYear()}</p><p>Powered by <a href="https://vercel.com">Vercel</a> ,  Crafted by <a href="https://fransfp.dev">Us</a></p>
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
