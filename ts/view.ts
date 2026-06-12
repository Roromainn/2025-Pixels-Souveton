export class View {
    constructor() {
        let c = document.querySelector('canvas') as HTMLCanvasElement;
        let nom = document.querySelector('#nom') as HTMLInputElement;
        let btn_connect = document.querySelector('#btn-connect') as HTMLInputElement;
        let couleur = document.querySelector('#couleur') as HTMLInputElement;
        let btn_disconnect = document.querySelector('#btn-disconnect') as HTMLInputElement;
        c.style.backgroundColor = "orange";
        c.width = 400;
        c.height = 400;
    }
}