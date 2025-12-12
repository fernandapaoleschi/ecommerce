import { Produto } from "../models/Produto"

export interface ProdutoRepository {
	// CRUD do Produto
    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
	atualizar (produto: Produto): void;
	deletar(numero: number): void;
    entradaEstoque(id: number, qtd: number): void;
    saidaEstoque(id: number, qtd: number): void;
}