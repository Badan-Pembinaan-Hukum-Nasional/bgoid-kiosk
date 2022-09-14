import WebIcon from "./assets/icons/globe.svg";
import YoutubeIcon from "./assets/socials/Youtube.svg";
import InstagramIcon from "./assets/socials/Instagram.svg";
import FacebookIcon from "./assets/socials/Facebook.svg";
import TwitterIcon from "./assets/socials/Twitter.svg";
import TikTok from "./assets/socials/Tik Tok.svg";

type SocialLink = {
    alt: string,
    logo:string,
    url:string
}

const socialAccountsComponent = ()=>{

    const socials:SocialLink[] = [
        {
            alt:'Website BPHN',
            logo: WebIcon,
            url: 'https://bphn.go.id'
        },
        {
            alt:'Youtube BPHN',
            logo: YoutubeIcon,
            url: 'https://www.youtube.com/c/BPHNTVOfficial/videos'
        },
        {
            alt:'Instagram BPHN',
            logo: InstagramIcon,
            url: 'https://www.instagram.com/bphn_kemenkumham/'
        },
        {
            alt:'Facebook BPHN',
            logo: FacebookIcon,
            url: 'https://www.facebook.com/BPHNKemenkumhamRI/'
        },
        {
            alt:'Twitter BPHN',
            logo: TwitterIcon,
            url: 'https://twitter.com/bphn_kumham'
        },
        {
            alt:'TikTok BPHN',
            logo: TikTok,
            url:'https://www.tiktok.com/@bphn_kemenkumham?lang=id-ID'
        }
    ]


    const components =  socials.map((social)=>{
        return `<a class="touchpoint-links--item" href="${social.url}" alt="${social.alt}">
            <img src="${social.logo}"/></a>`
    });

    return components.join("")
}

export default socialAccountsComponent;