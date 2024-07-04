const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "As energias renováveis, como a solar, colaboram com a sustentabilidade devido à capacidade de geração de energia sem causar danos à natureza. As fontes geradoras conseguem se reabastecer naturalmente, a partir da luz do sol, do vento, das ondas e de outras fontes limpas",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: ""
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Energia sustentável é a energia produzida a partir de fontes renováveis, isto é, que não se esgotam como os combustíveis fósseis, por exemplo. Desse modo, elas podem gerar eletricidade para a sociedade atual e, no futuro, continuar abastecendo as próximas gerações",
        alternativas: [
            
        
            {
                texto: "Política enegéticas e impactos ambientais",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "As políticas energéticas são medidas adotadas por um governo e que possuem como finalidade explorar, administrar, gerir e consumir as energias disponíveis de forma a que ocorram os menores impactos ambientais possíveis.",
        alternativas: [
            
            {
                texto: "Quais são os impactos ambientais da produção de energia elétrica?",
                afirmacao: "A eficiência energética desempenha um papel fundamental nesse aspecto, já que minimiza as emissões de gases de efeito estufa."
            }
        ]
    },
    {
        enunciado: "Além de emitir mais gás carbônico – responsável pelo aquecimento global, causa poluição local, emitindo substâncias como enxofre e óxido nitroso, que afetam a respiração. ",
        alternativas: [
            
            {
                texto: "Como melhorar?",
                
            }
        ]
    },
    {
        enunciado: " Os impactos ambientais causados pelas fontes de energia, na maioria pelos combustíveis fósseis, podem ser evitados com o uso de energia limpa. A energia solar, a eólica e a biomassa, são algumas das opções renováveis que, ano após ano, ganham espaço e reconhecimento",
        alternativas: [
            {
               
               
            },
            {
                texto: "Como a eficiência energética pode reduzir os impactos ambientais?",
                afirmacao: " Além disso, ao adotar tecnologias e práticas que otimizam o consumo de energia, ela contribui diretamente para a redução de nossa pegada ambiental."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();