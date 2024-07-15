import NavBar from "../../components/NavBar/NavBar";
import "./PaginaHome.css"
export default function PaginaHome() {
    return (
        <div>
            <NavBar />
            <div className="alignHome">
                <div className="homeContent">
                    <div className="homeTextLeft">
                        <h1>Bem vindo ao site do UNO</h1>
                        <p>Descubra a emoção de UNO, o jogo de cartas que une amigos e famílias em momentos de pura diversão! Com regras simples e partidas rápidas, UNO é perfeito para todas as idades e ocasiões. Desafie seus adversários em uma disputa estratégica onde cada carta conta!</p>
                        
                    </div>
                    <img src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Funo%2Fhome%2FGameName_Newsfeed_Game_Icon_400x400-400x400-bc5a62db5d04db170940782968565fdbac946fba.png?h=270&quality=medium&resize=1&w=480" alt="Jogo de cartas UNO" />
                    <div className="homeTextBottom">
                    <h2>Por que escolher UNO?</h2>
                        <ul>
                            <li>Divertido para Todos: Ideal para festas, reuniões em família ou uma noite descontraída com amigos</li>
                            <li>Fácil de Aprender: Perfeito para iniciantes e jogadores experientes.</li>
                            <li>Momentos Inesquecíveis: Crie memórias incríveis enquanto se diverte!</li>
                        </ul>
                        <p>Junte-se à comunidade de amantes do UNO e leve a sua diversão a um novo nível. Prepare-se para risadas, desafios e muita competição! Venha jogar UNO e descubra quem será o grande campeão!</p>
                    </div>

                </div>

            </div>


        </div>

    )
}