import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./PaginaComoJogar.css"
export default function PaginaComoJogar() {
    return (
        <div>
            <NavBar />
            <div className="comoJogarContent">
                <h2>Preparação</h2>
                <p>Uma pessoa do grupo deve embaralhar e distribuir 7 cartas para todos os jogadores. As cartas que sobram devem ser viradas para baixo para formar o monte</p>
                <h2>Início</h2>
                <p>A carta de cima do monte deve ser virada e colocada na pilha de descarte para dar início ao jogo. O jogador à esquerda de quem distribuiu fará a primeira jogada de acordo com a <Link to={"/regras"}>carta que estiver na pilha de descarte</Link></p>
                <h2>Desenvolvimento</h2>
                <p>Se o jogador não tiver uma carta válida (mesma cor, tipo ou número), ele deve comprar do monte UMA VEZ. Se a carta nova for válida, ele pode jogar, caso contrário, pula a vez</p>
                <h2>UNO!!</h2>
                <p>Se um jogador tiver apenas uma carta disponível, ele DEVE falar UNO.</p>
                <h2>Fim</h2>
                <p>A partida acaba quando um jogador se livra de todas as suas cartas. Ele é declarado, então, o vencedor.</p>
            </div>

        </div>

    )
}