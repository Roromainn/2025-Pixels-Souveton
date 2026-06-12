export class Pixel{
    private x : number;
    private y : number;
    private intColor : number;
    private strColor : string;

    /** Coordonnée X du pixel */    
    public get X(): number{
        return this.x;
    }
    
    /** Coordonnée Y du pixel */
    public get Y(): number{
        return this.y;
    }

    /** Couleur du pixel au format ARGB (entier 32 bits) */
    public get IntColor(): number{
        return this.intColor;
    }

    /** Couleur du pixel au format CSS rgba() */
    public get StrColor(): string {
        const hex = ("00000000" + this.intColor.toString(16)).slice(-8);
        const a = hex.slice(0, 2); 
        const r = hex.slice(2, 4);
        const g = hex.slice(4, 6);
        const b = hex.slice(6, 8);
        return `rgba(${parseInt(r,16)}, ${parseInt(g,16)}, ${parseInt(b,16)}, ${parseInt(a,16)/255})`;
    }

    /** Crée un pixel à partir de ses coordonnées et de sa couleur ARGB */
    constructor(x:number, y:number, color:number){
        this.intColor = color;
        this.x = x;
        this.y = y;
        this.strColor = "#" + color.toString(16).padStart(8, "0");
    }

    /** Crée un pixel à partir d'une chaîne au format X,Y,IntColor */
    static fromString(str: string): Pixel {
        const chaine: string[] = str.split(",");
        return new Pixel(
            parseInt(chaine[0]),
            parseInt(chaine[1]),
            parseInt(chaine[2])
        );
    }

    /** Retourne une chaîne au format X,Y,IntColor */
    toString(): string {
        return this.x + "," + this.y + "," + this.intColor;
    }
}