import { Controler } from "./controler.js";
import { IObserver } from "./IObserver.js";

export class View implements IObserver {

    private controler: Controler;
    private c: HTMLCanvasElement;
    private nom: HTMLInputElement;
    private btn_connect: HTMLInputElement;
    private couleur: HTMLInputElement;
    private btn_disconnect: HTMLInputElement;

    constructor() {
        this.controler = new Controler();
        this.c = document.querySelector('canvas') as HTMLCanvasElement;
        this.nom = document.querySelector('#nom') as HTMLInputElement;
        this.btn_connect = document.querySelector('#btn-connect') as HTMLInputElement;
        this.couleur = document.querySelector('#couleur') as HTMLInputElement;
        this.btn_disconnect = document.querySelector('#btn-disconnect') as HTMLInputElement;
        this.c.style.backgroundColor = "orange";
        this.c.width = 400;
        this.c.height = 400;
        this.controler.subscribe(this);
    }

    notify(s: string): void {
        console.log(s);
    }

}