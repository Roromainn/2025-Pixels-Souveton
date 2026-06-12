import { IObserver } from "./IObserver.js";

/** Interface pour les sujets observables du pattern MVC */
export interface IObservable {

    /** Abonne un observateur au sujet */
    subscribe(observer: IObserver): void

    /** Désabonne un observateur du sujet */
    unsubscribe(observer: IObserver): void

    /** Notifie tous les observateurs abonnés */
    notify(...args: unknown[]): void
}