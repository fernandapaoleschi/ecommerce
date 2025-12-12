import chalk from "chalk";
import readlinesync = require("readline-sync");
import { Produto } from "./scr/models/Produto";
import { ProdutoDecoracao } from "./scr/models/ProdutoDecoracao";
import { ProdutoVestuario } from "./scr/models/ProdutoVestuario";

export function main(){
    let opcao: number;

    // Objeto da Classe ProdutoVestuario (Teste)
    const vestuario: ProdutoVestuario = new ProdutoVestuario(2, "Blusa Crochê", 120.00, 3, "Algodão", "M");
    vestuario.visualizar();

    // Objeto da Classe ProdutoDecoracao (Teste)
    const decoracao: ProdutoDecoracao = new ProdutoDecoracao(3, "Quadro Macramê", 150.00, 2, "Fio de algodão", "Sala");
    decoracao.visualizar();

    while(true){
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

        if(opcao == 9){
            console.log("\nEncerrando o sistema de E-commerce...");
            console.log("Até a próxima!\n");
            sobre();
            process.exit(0);
        }

        switch(opcao) {
            case 1:
                console.log("\n\nCadastrar produto\n\n");

                keyPress()
                break;

            case 2:
                console.log("\n\nListar todos os produtos\n\n");

                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar produto por ID\n\n");

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar produto\n\n");

                keyPress()
                break;
            case 5:
                console.log("\n\nRemover produto\n\n");

                keyPress()
                break;
            case 6:
                console.log("\n\nEntrada de estoque\n\n");

                keyPress()
                break;
            case 7:
                console.log("\n\nSaída de estoque\n\n");

                keyPress()
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
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}
function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();