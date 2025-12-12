import { Produto } from "./Produto";

export class ProdutoDecoracao extends Produto {

    private _ambiente: string;
    private _material: string;

    constructor(id: number, nome: string, preco: number, quantidade: number, ambiente: string, material: string){
        super(id, nome, preco, quantidade);
        this._ambiente = ambiente;
        this._material = material;
    }

    public get ambiente(){
        return this._ambiente
    }

    public set ambiente(ambiente: string){
        this._ambiente = ambiente;
    }

    public get material(){
        return this._material
    }

    public set material(material: string){
        this._material = material;
    }

    public visualizar(): void{
    super.visualizar();
    console.log(`O material é ${this._material}`)
    console.log(`O ambiente é ${this._ambiente}`)

    }
}