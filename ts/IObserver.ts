
/** Interface pour les observateurs du pattern MVC */
export interface IObserver {
    /** Reçoit un message envoyé par le sujet observable */
    receive(s: string): void;
}