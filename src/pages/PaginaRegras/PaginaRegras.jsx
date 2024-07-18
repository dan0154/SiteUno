import NavBar from "../../components/NavBar/NavBar";
import CartaInfo from "./CartaInfo/CartaInfo";
import "./PaginaRegras.css"

export default function PaginaRegras() {
    return (
        <div>
            <NavBar />
            <div className="regrasContent">
                <div className="penalidades">
                    <h2>Penalidades</h2>
                    <p><strong>1.</strong> Caso o jogador fique com uma carta na mão e não grite UNO, ele deve comprar 2 cartas. Entretanto, é necessário que alguém perceba e acuse antes do próximo jogador começar a jogada</p>
                    <p><strong>2.</strong> Caso o jogador jogue uma carta errada no monte e alguém perceba, ele deve retirar a carta e comprar duas do monte</p>
                    <p><strong>3.</strong> Jogadores que derem palpites devem comprar duas cartas do monte</p>
                </div>

                <div className="parteDasCartas">
                    <h2>Cartas</h2>
                    <div className="cartasConjunto">
                        <CartaInfo img={"src/assets/mais4.png"} nome={"Comprar Quatro Cartas"} texto={"Permite que o jogador escolha a cor com que o jogo deve seguir, além de obrigar o jogador seguinte a comprar quatro cartas e perder a vez. Esta carta não pode ser a carta inicial do jogo, portanto, se for retirada do monte para começar, deve ser devolvida"} />
                        <CartaInfo img={"src/assets/verdeReverter.png"} nome={"Inverter"} texto={"Como o próprio nome sugere, esta carta inverte a ordem do jogo. Se esta indo no sentido horário, passará a ser no sentido anti-horário e vice-versa. Também só pode ser jogada logo após outra de mesmo tipo ou que tenha a mesma cor"} />
                        <CartaInfo img={"src/assets/azulMais2.png"} nome={"Comprar Duas Cartas"} texto={"Faz o próximo jogador comprar 2 cartas. Assim como as cartas numeradas, esta carta pode ser jogada logo após outra do mesmo tipo ou que tenha a mesma cor"} />
                        <CartaInfo img={"src/assets/mudarCor.png"} nome={"Curinga"} texto={"Permite ao jogador que jogou-a escolher com qual cor o jogo deve prosseguir"} />
                        <CartaInfo img={"src/assets/amareloBloquear.png"} nome={"Bloquear"} texto={"Impede o próximo jogador de fazer sua jogada. Também só pode ser jogada logo após outra de mesmo tipo ou que tenha a mesma cor"} />
                        <CartaInfo img={"src/assets/vermelha0.png"} nome={"Cartas de cor numeradas"} texto={"Cartas mais comuns do jogo, podem ser jogadas combinando tanto a cor quanto o valor"} />
                    </div>
                </div>

            </div>

        </div>

    )
}