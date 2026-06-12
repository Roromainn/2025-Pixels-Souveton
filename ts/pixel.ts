export class Pixel{
    private x : number;
    private y : number;
    private intColor : number;
    private strColor : string;

    public get X(): number{
        return this.x;
    }
    public get Y(): number{
        return this.y;
    }

    public get IntColor(): number{
        return this.intColor;
    }

    public get StrColor(): string {
        const hex = ("00000000" + this.intColor.toString(16)).slice(-8);
        const a = hex.slice(0, 2); 
        const r = hex.slice(2, 4);
        const g = hex.slice(4, 6);
        const b = hex.slice(6, 8);
        return `rgba(${parseInt(r,16)}, ${parseInt(g,16)}, ${parseInt(b,16)}, ${parseInt(a,16)/255})`;
}

    constructor(x:number, y:number, color:number){
        this.intColor = color;
        this.x = x;
        this.y = y;
        this.strColor = "#" + color.toString(16).padStart(8, "0");
  }

    static fromString(str: string): Pixel {
        const chaine: string[] = str.split(",");
        return new Pixel(
            parseInt(chaine[0]),
            parseInt(chaine[1]),
            parseInt(chaine[2])
        );
    }

    toString(): string {
    return this.x + "," + this.y + "," + this.intColor;
    }
}