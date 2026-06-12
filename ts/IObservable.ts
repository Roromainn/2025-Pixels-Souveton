import { IObserver } from "./IObserver.js";


export interface IObservable {

    subscribe(observer: IObserver): void

    unsubscribe(observer: IObserver): void

    notify(...args: unknown[]): void
}