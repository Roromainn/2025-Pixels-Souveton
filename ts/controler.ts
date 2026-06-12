import { IObservable } from "./IObservable.js";
import { IObserver } from "./IObserver.js";
import { Pixel } from "./pixel.js";


export class Controler implements IObservable {

    #observers: Set<IObserver>
    private WebSocket : WebSocket
    private nomJoueur : string


    constructor(s: string) {
        this.#observers = new Set();
        this.WebSocket = new WebSocket("ws://srv-iq-etu2/testws/ws");
        this.nomJoueur = s;
        this.connected();
        this.receive();
    }

    subscribe(observer: IObserver): void
    {
        this.#observers.add(observer)

    }
    
    unsubscribe(observer: IObserver): void
    {
        this.#observers.delete(observer)
    }

    notify(s: string): void {
    for (const observer of this.#observers) {
        observer.receive(s); 
    }
}

    private connected()
    {
        this.WebSocket.onopen = (event) => {
            this.WebSocket.send(this.nomJoueur);
            console.log("nom du joueur envoyé : " + this.nomJoueur);
        }
    }

    private receive()
    {
        this.WebSocket.onmessage = (event) => {
            console.log("message reçu : " + event.data);
            this.notify(event.data);
        }
    }

    /** Envoie un pixel au serveur */
    sendPixel(p: Pixel): void {
        this.WebSocket.send(p.toString());
    }

    /** Ferme la connexion WebSocket et notifie les observateurs */
    deco(): void {
        this.WebSocket.close();
        this.notify("disconnected");

    }
}
