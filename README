# E-commerce Artesanato (POO + CRUD + Menu no Terminal) 🛍️🧶

Projeto simples em **TypeScript** para treinar **POO (Programação Orientada a Objetos)**, com **menu no terminal** e um sistema de **cadastro e controle de produtos** de um e-commerce de artesanato.

O sistema possui uma classe mãe **Produto** e duas classes filhas:
- **ProdutoDecoracao** (ex.: vaso, quadro, macramê)
- **ProdutoVestuario** (ex.: blusa, saia artesanal)

Além disso, o projeto segue uma arquitetura inspirada no projeto "Conta Bancária" da Generation, com:
- **Repository (Interface)** para as assinaturas do CRUD
- **Controller** com a implementação e armazenamento em array

---

## ✅ Funcionalidades

### CRUD Básico (obrigatório)
- Cadastrar produto
- Listar todos os produtos
- Buscar produto por ID
- Atualizar produto
- Remover produto

### Estoque (opcional / extra)
- Entrada de estoque
- Saída de estoque

---

## 🧩 UML (Mermaid)

```mermaid
classDiagram
class Produto {
<<Abstract>>
  - id : number
  - nome : string
  - preco : number
  - quantidade : number
  + get id() number
  + get nome() string
  + get preco() number
  + get quantidade() number
  + set id(id: number) void
  + set nome(nome: string) void
  + set preco(preco: number) void
  + set quantidade(quantidade: number) void
  + visualizar() void
}

class ProdutoDecoracao {
  - material : string
  - ambiente : string
  + get material() string
  + set material(material: string) void
  + get ambiente() string
  + set ambiente(ambiente: string) void
  + visualizar() void
}

class ProdutoVestuario {
  - tecido : string
  - tamanho : string
  + get tecido() string
  + set tecido(tecido: string) void
  + get tamanho() string
  + set tamanho(tamanho: string) void
  + visualizar() void
}

class ProdutoRepository {
<< Interface >>
  + procurarPorId(id: number) void
  + listarTodos() void
  + cadastrar(produto: Produto) void
  + atualizar(produto: Produto) void
  + deletar(id: number) void
  + entradaEstoque(id: number, qtd: number) void
  + saidaEstoque(id: number, qtd: number) void
}

class ProdutoController {
  + procurarPorId(id: number) void
  + listarTodos() void
  + cadastrar(produto: Produto) void
  + atualizar(produto: Produto) void
  + deletar(id: number) void
  + entradaEstoque(id: number, qtd: number) void
  + saidaEstoque(id: number, qtd: number) void
  + gerarId() number
  + buscarNoArray(id: number) Produto
}

Produto <|-- ProdutoDecoracao
Produto <|-- ProdutoVestuario
Produto <.. ProdutoRepository
ProdutoRepository <|.. ProdutoController
