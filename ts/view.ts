import { Controler } from "./controler.js";
import { IObserver } from "./IObserver.js";

export class View implements IObserver {

    private controler: Controler | undefined;
    private c: HTMLCanvasElement;
    private nom: HTMLInputElement;
    private btn_connect: HTMLInputElement;
    private couleur: HTMLInputElement;
    private btn_disconnect: HTMLInputElement;

    constructor() {
        this.c = document.getElementById('Canvas') as HTMLCanvasElement;
        this.nom = document.getElementById('nom') as HTMLInputElement;
        this.btn_connect = document.getElementById("btn-connect") as HTMLInputElement;
        this.couleur = document.getElementById('couleur') as HTMLInputElement;
        this.btn_disconnect = document.getElementById('btn-disconnect') as HTMLInputElement;
        this.c.style.backgroundColor = "orange";
        this.c.width = 400;
        this.c.height = 400;
        this.btn_connect.addEventListener("click", () => { this.connection() });
    }

    notify(s: string): void {
        console.log(s);
    }

    private connection() {
        this.btn_connect.onclick = () => {
            this.controler = new Controler(this.nom.value);
            this.controler.subscribe(this);
        }
    }

}