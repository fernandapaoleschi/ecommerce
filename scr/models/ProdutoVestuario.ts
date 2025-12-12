import { Produto } from "./Produto";

export class ProdutoVestuario extends Produto {

    private _material: string;
    private _tamanho: string;

    constructor(id: number, nome: string, preco: number, quantidade: number, material: string, tamanho: string){
        super(id, nome, preco, quantidade)
        this._material = material;
        this._tamanho = tamanho;
    }

    public get material(){
        return this._material;
    }

    public set material(material: string){
        this._material = material;
    }

    public get tamanho(){
        return this._tamanho;
    }

    public set tamanho(tamanho:string){
        this._tamanho = tamanho;
    }

    public visualizar(): void{
        super.visualizar();
        console.log(`O material é ${this._material}`)
        console.log(`O tamanho é ${this._tamanho}`)

    }
}