import { Controler } from "./controler.js";
import { IObserver } from "./IObserver.js";
import { Pixel } from "./pixel.js";

export class View implements IObserver {

    private controler: Controler | undefined;
    private c: HTMLCanvasElement;
    private nom: HTMLInputElement;
    private btn_connect: HTMLInputElement;
    private couleur: HTMLInputElement;
    private btn_disconnect: HTMLInputElement;
    private clickHandler = (event: MouseEvent) => { this.click(event) };


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
        this.btn_disconnect.addEventListener("click", () => { this.deco() });

    }

    /** Requis par IObserver, non utilisé directement */
    notify(s: string): void {
        console.log(s);
    }

    private connection() {
        this.controler = new Controler(this.nom.value);
        this.controler.subscribe(this);
        this.c.addEventListener("click", this.clickHandler);
    }

    /** Reçoit un message du contrôleur et dessine les pixels sur le canvas */
    receive(message: string): void {
        if (this.controler === undefined) return; 
        if (message === "disconnected") return;
        
        const lignes: string[] = message.split("\n");
        for (const ligne of lignes) {
            if (ligne.trim() === "") continue;
            const p: Pixel = Pixel.fromString(ligne);
            this.drawPixel(p);
        }
    }   

    /** Dessine un pixel sur le canvas à partir d'un objet Pixel */
    drawPixel(p: Pixel) {
        const rect = this.c.getBoundingClientRect();
        let ctx = this.c.getContext("2d");
        if (ctx != null) {
            ctx.fillStyle = p.StrColor;
            ctx.fillRect(p.X, p.Y, 2, 2);
        }
    }

    private click(event: MouseEvent): void {
        const rect = this.c.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const x = Math.round(mouseX * this.c.width / rect.width);
        const y = Math.round(mouseY * this.c.height / rect.height);
        const colorHtml = this.couleur.value;
        const argb = parseInt("ff" + colorHtml.replace("#", ""), 16);
        const p = new Pixel(x, y, argb);
        this.drawPixel(p);
    } 
    
    private deco() {
        this.controler?.deco();
        this.controler = undefined;
        this.c.removeEventListener("click", this.clickHandler);
    }


}