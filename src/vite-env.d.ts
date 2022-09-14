/// <reference types="vite/client" />
declare global {
    interface Window { player: any; }
}

window.player = window.player || {};