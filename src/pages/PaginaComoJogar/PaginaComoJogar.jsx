import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./PaginaComoJogar.css"
import EstagioComoJogar from "./EstagioComoJogar/EstagioComoJogar";
export default function PaginaComoJogar() {
    return (
        <div>
            <NavBar />
            <div className="comoJogarContent">
{/*                 <h2>Preparação</h2>
                <p>Uma pessoa do grupo deve embaralhar e distribuir 7 cartas para todos os jogadores. As cartas que sobram devem ser viradas para baixo para formar o monte</p>
                <h2>Início</h2>
                <p>A carta de cima do monte deve ser virada e colocada na pilha de descarte para dar início ao jogo. O jogador à esquerda de quem distribuiu fará a primeira jogada de acordo com a <Link to={"/regras"}>carta que estiver na pilha de descarte</Link></p>
                <h2>Desenvolvimento</h2>
                <p>Se o jogador não tiver uma carta válida (mesma cor, tipo ou número), ele deve comprar do monte UMA VEZ. Se a carta nova for válida, ele pode jogar, caso contrário, pula a vez</p>
                <h2>UNO!!</h2>
                <p>Se um jogador tiver apenas uma carta disponível, ele DEVE falar UNO.</p>
                <h2>Fim</h2>
                <p>A partida acaba quando um jogador se livra de todas as suas cartas. Ele é declarado, então, o vencedor.</p> */}
                <EstagioComoJogar numero={"1."} texto={"Embaralhe as 108 cartas e entregue sete a cada jogador."} imagem={"src/assets/1.png"}/>
                <EstagioComoJogar numero={"2."} texto={"Coloque o resto do baralho virado para baixo no meio da mesa, formando o monte. Os jogadores que precisarem comprar durante a rodada vão usar as cartas que estão nele"} imagem={"src/assets/2.png"}/>
                <EstagioComoJogar numero={"3."} texto={"Vire a primeira carta do baralho para começar a partida. Coloque essa primeira carta ao lado do baralho, mas virada para cima. Ela vai orientar o início da partida e ser a base da pilha de descarte."} imagem={"src/assets/3.png"}/>
                <EstagioComoJogar numero={"4."} texto={"O jogador à esquerda de quem começou pode descartar uma carta cujo número, símbolo ou cor seja semelhante ao da que foi descartada por último. Peça para ele colocar o item em cima dessa pilha. Depois, a próxima pessoa também pode jogar."} imagem={"src/assets/4.png"}/>
                <EstagioComoJogar numero={"5."} texto={"Compre uma carta do monte se você não tiver nenhuma que corresponda à que está na mesa. Jogue-a imediatamente se ela tiver o número, o símbolo ou a cor ideal ou pule a vez se ela não servir."} imagem={"src/assets/5.png"}/>
                <EstagioComoJogar numero={"6."} texto={'Diga "Uno" quando você só tiver uma carta na mão. Continue alternando com os demais jogadores até alguém ficar só com uma carta. Nesse ponto, essa pessoa tem que dizer "Uno".'} imagem={"src/assets/7.png"}/>
                <EstagioComoJogar numero={"7."} texto={'Quando você só tiver uma carta (e já tiver dito "Uno"), espere mais uma rodada. Se a sua última carta combinar com a que está no topo da pilha, parabéns! Você venceu!'} imagem={"src/assets/8.png"}/>
                <EstagioComoJogar numero={"8."} texto={"Some os pontos dos jogadores no fim de cada rodada. A pessoa que vencer a rodada tem que somar o valor das cartas nas mãos dos outros jogadores para saber quantos pontos ganha. O vencedor de fato é aquele que chega a 500 pontos primeiro"} imagem={"src/assets/9.png"}/>
            </div>

        </div>

    )
}