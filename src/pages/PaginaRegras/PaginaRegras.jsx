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

        </div>

    )
}