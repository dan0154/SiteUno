import NavBar from "../../components/NavBar/NavBar";
import CartaInfo from "./CartaInfo/CartaInfo";
import "./PaginaRegras.css"

export default function PaginaRegras() {
    return (
        <div>
            <NavBar />
            <div className="cartasConjunto">
                <CartaInfo img={"src/assets/mais4.png"} nome={"Comprar Quatro Cartas"} texto={"Faz comprar 4"} />
                <CartaInfo img={"src/assets/mudarCor.png"} nome={"Curinga"} texto={"Faz comprar 4"} />
                <CartaInfo img={"src/assets/vermelha0.png"} nome={"Cartas de cor numeradas"} texto={"Faz comprar 4"} />
                <CartaInfo img={"src/assets/azulMais2.png"} nome={"Comprar Duas Cartas"} texto={"Faz comprar 4"} />
                <CartaInfo img={"src/assets/verdeReverter.png"} nome={"Inverter"} texto={"Faz comprar 4"} />
                <CartaInfo img={"src/assets/amareloBloquear.png"} nome={"Bloquear"} texto={"Faz comprar 4"} />
            </div>
            <h2>Penalidades</h2>
            <p><strong>1.</strong> Caso o jogador fique com uma carta na mão e não grite UNO, ele deve comprar 2 cartas. Entretanto, é necessário que alguém perceba e acuse antes do próximo jogador começar a jogada</p>
            <p><strong>2.</strong> Caso o jogador jogue uma carta errada no monte e alguém perceba, ele deve retirar a carta e comprar duas do monte</p>
            <p><strong>3.</strong> Jogadores que derem palpites devem comprar duas cartas do monte</p>

        </div>

    )
}