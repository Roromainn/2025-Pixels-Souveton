import { IObservable } from "./IObservable.js";
import { IObserver } from "./IObserver.js";


export class Controler implements IObservable {

    #observers: Set<IObserver>
    WebSocket : WebSocket


    constructor() {
        this.#observers = new Set();
        this.WebSocket = new WebSocket("ws://localhost:8080");
        let c = document.querySelector('canvas') as HTMLCanvasElement;
        let nom = document.querySelector('#nom') as HTMLInputElement;
        let btn_connect = document.querySelector('#btn-connect') as HTMLInputElement;
        let couleur = document.querySelector('#couleur') as HTMLInputElement;
        let btn_disconnect = document.querySelector('#btn-disconnect') as HTMLInputElement;
        c.style.backgroundColor = "orange";
        c.width = 400;
        c.height = 400;
    }

    subscribe(observer: IObserver): void
    {
        this.#observers.add(observer)

    }
    
    unsubscribe(observer: IObserver): void
    {
        this.#observers.delete(observer)
    }

    notify(s: string): void
    {
        for (const observer of this.#observers) {
            observer.notify(s);
        }
    }
}