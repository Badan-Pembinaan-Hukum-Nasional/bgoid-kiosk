import BerakhlakLogo from './assets/logo/berakhlak.png'
import Corpu from './assets/logo/corpu.png'
import Wbk from './assets/logo/wbk.png'
import WbbmOk from './assets/logo/wbbm_setuju.png'
import BphnLogo from './assets/logo/bphn-logo.png'

type Logo = {
    image: string,
    alt: string,
    class?:string
}

export default function Logos(){

    const logos:Logo[]=[
        {
            alt: 'Logo BPHN',
            image: BphnLogo,
            class: 'logos--item__square'
        },
        {
            alt: 'Logo WBK BPHN',
            image: Wbk,
            class: 'logos--item__square'
        },
        {
            alt: 'Logo BPHN Setuju WBBM 2022',
            image: WbbmOk,
            class: 'logos--item__longer'
        },
        {
            alt: 'Logo Corporate Univeristy',
            image: Corpu,
            class: 'logos--item__square'
        },
        {
            alt: 'Logo Berakhlak',
            image:BerakhlakLogo,
            class: 'logos--item__longer'
        }
    ]

    return logos.map((logo)=>{
        return `<div class="logos--item">
            <img class="${logo.class&&logo.class}" src="${logo.image}" alt="${logo.alt}"/>
        </div>`
    }).join("")

}