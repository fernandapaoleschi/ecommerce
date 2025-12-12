import readlinesync = require("readline-sync");
import { ProdutoDecoracao } from "./src/models/ProdutoDecoracao";
import { ProdutoVestuario } from "./src/models/ProdutoVestuario";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {


    // Instância da Classe ProdutoController
    let produtos: ProdutoController = new ProdutoController();

    // Variáveis Auxiliares
    let opcao, id, tipo, quantidade: number;
    let nome, material, tamanho, ambiente, tecido: string;
    let preco: number;

    // Tipos de Produto
    const tiposProdutos = ["Decoração", "Vestuário"];
    console.log("\nCriar Produtos\n");

    // Produto de Vestuário
    let pv1: ProdutoVestuario = new ProdutoVestuario(
        produtos.gerarId(),
        "Blusa Crochê",
        120.00,
        3,
        "Algodão",
        "M"
    );
    produtos.cadastrar(pv1);

    // Produto de Vestuário
    let pv2: ProdutoVestuario = new ProdutoVestuario(
        produtos.gerarId(),
        "Saia Artesanal",
        150.00,
        2,
        "Linho",
        "G"
    );
    produtos.cadastrar(pv2);

    // Produto de Decoração
    let pd1: ProdutoDecoracao = new ProdutoDecoracao(
        produtos.gerarId(),
        "Vaso de Cerâmica",
        80.00,
        5,
        "Cerâmica",
        "Sala"
    );
    produtos.cadastrar(pd1);

    // Produto de Decoração
    let pd2: ProdutoDecoracao = new ProdutoDecoracao(
        produtos.gerarId(),
        "Quadro Macramê",
        150.00,
        1,
        "Fio de algodão",
        "Quarto"
    );
    produtos.cadastrar(pd2);

    // Listar todos os produtos
    produtos.listarTodos();

    while (true) {
        console.log("================================================");
        console.log("======= E-COMMERCE | CONTROLE DE ESTOQUE =======");
        console.log("================================================");
        console.log("          1- Cadastrar produto                  ");
        console.log("          2- Listar todos os produtos           ");
        console.log("          3- Buscar produto por ID              ");
        console.log("          4- Atualizar produto                  ");
        console.log("          5- Remover produto                    ");
        console.log("          6- Entrada de estoque                 ");
        console.log("          7- Saída de estoque                   ");
        console.log("          8- Listar produtos por categoria      ");
        console.log("          9- Exibir produtos com estoque baixo  ");
        console.log("          0- Sair                              ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nEncerrando o sistema de E-commerce...");
            console.log("Até a próxima!\n");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar produto\n\n");
                console.log("Tipo do produto:");
                console.log("1 - " + tiposProdutos[0]);
                console.log("2 - " + tiposProdutos[1]);
                tipo = readlinesync.questionInt("Escolha: ");
                nome = readlinesync.question("Nome: ");
                preco = readlinesync.questionFloat("Preço: ");
                quantidade = readlinesync.questionInt("Quantidade: ");

                id = produtos.gerarId();
                switch (tipo) {
                    case 1:
                        material = readlinesync.question("Material: ");
                        ambiente = readlinesync.question("Ambiente: ");

                        produtos.cadastrar(
                            new ProdutoDecoracao(id, nome, preco, quantidade, material, ambiente)
                        );
                        break;

                    case 2:
                        tecido = readlinesync.question("Tecido: ");
                        tamanho = readlinesync.question("Tamanho (PP/P/M/G/GG): ");

                        produtos.cadastrar(
                            new ProdutoVestuario(id, nome, preco, quantidade, tecido, tamanho)
                        );
                        break;

                    default:
                        console.log("Tipo inválido!");
                        break;
                }

                keyPress()
                break;

            case 2:
                console.log("\n\nListar todos os produtos\n\n");

                produtos.listarTodos();

                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar produto por ID\n\n");

                id = readlinesync.questionInt("Digite o ID: ");
                produtos.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar produto\n\n");

                console.log("Tipo do produto:");
                console.log("1 - " + tiposProdutos[0]);
                console.log("2 - " + tiposProdutos[1]);
                tipo = readlinesync.questionInt("Escolha: ");

                id = readlinesync.questionInt("Digite o ID do produto: ");
                nome = readlinesync.question("Nome: ");
                preco = readlinesync.questionFloat("Preço: ");
                quantidade = readlinesync.questionInt("Quantidade: ");

                if (tipo == 1) {
                    material = readlinesync.question("Material: ");
                    ambiente = readlinesync.question("Ambiente: ");

                    produtos.atualizar(
                        new ProdutoDecoracao(id, nome, preco, quantidade, material, ambiente)
                    );

                } else if (tipo == 2) {
                    material = readlinesync.question("Material: ");
                    tamanho = readlinesync.question("Tamanho (PP/P/M/G/GG): ");

                    produtos.atualizar(
                        new ProdutoVestuario(id, nome, preco, quantidade, material, tamanho)
                    );

                } else {
                    console.log("Tipo inválido!");
                }

                keyPress()
                break;
            case 5:
                console.log("\n\nRemover produto\n\n");
                id = readlinesync.questionInt("Digite o ID: ");
                produtos.deletar(id);

                keyPress()
                break;
            case 6:
                console.log("\n\nEntrada de estoque\n\n");
                id = readlinesync.questionInt("Digite o ID: ");
                quantidade = readlinesync.questionInt("Quantidade: ");
                produtos.entradaEstoque(id, quantidade);
                keyPress();
                break;

            case 7:
                console.log("\n\nSaída de estoque\n\n");
                id = readlinesync.questionInt("Digite o ID: ");
                quantidade = readlinesync.questionInt("Quantidade: ");
                produtos.saidaEstoque(id, quantidade);
                keyPress();
                break;

            case 8:
                console.log("\n\nListar produtos por categoria\n\n");

                keyPress()
                break;
            case 9:
                console.log("\n\nExibir produtos com estoque baixo\n\n");

                keyPress()
                break;

            default:
                console.log("\nOpção inválida!\n");

                break;

        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Fernanda Paoleschi Santos ");
    console.log("Generation Brasil - fernandas1@generation.org");
    console.log("github.com/fernandapaoleschi");
    console.log("*****************************************************");
}
function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();