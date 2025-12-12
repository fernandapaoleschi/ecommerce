import { Produto } from "../models/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository{



    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0;
    

    procurarPorId(id: number): void {
        const produto = this.buscarNoArray(id);

    if (produto != null) {
        produto.visualizar();
    } else {
        console.log("Produto não encontrado.");
    }
    }
    
    listarTodos(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar();
        }
    }
    
    cadastrar(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log(`Produto cadastrado com sucesso! ID: ${produto.id}`);
    }
    
    atualizar(produto: Produto): void {
    const busca = this.buscarNoArray(produto.id);

    if (busca != null) {
        const index = this.listaProdutos.indexOf(busca);
        this.listaProdutos[index] = produto;
        console.log("Produto atualizado com sucesso!");
    } else {
        console.log("Produto não encontrado.");
    }
    }
    
    deletar(numero: number): void {
    const produto = this.buscarNoArray(numero);

    if (produto != null) {
        const index = this.listaProdutos.indexOf(produto);
        this.listaProdutos.splice(index, 1);
        console.log("Produto removido com sucesso!");
    } else {
        console.log("Produto não encontrado.");
    }
}


    public gerarId(): number {
    return ++this.numero;
    }
    
    public buscarNoArray(numero: number): Produto | null {
    for (let produto of this.listaProdutos) {
        if (produto.id === numero) {
            return produto;
        }
    }
    return null;
}
}