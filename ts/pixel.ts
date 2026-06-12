export class pixel{
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

    public get StrColor(): string{
        return this.strColor
    }

    constructor(x:number, y:number, color:number){
        this.intColor = color;
        this.x = x;
        this.y = y;
        this.strColor = "";
    }

    fromString(str:string):pixel{
        const chaine: string[] = str.split(","); 
        return new pixel(chaine[0] as unknown  as number ,chaine[1] as unknown  as number,chaine[2] as unknown  as number)
    }

    toString():string{
        return this.x as unknown  as string,this.y as unknown  as string,this.intColor as unknown  as string
    }
}