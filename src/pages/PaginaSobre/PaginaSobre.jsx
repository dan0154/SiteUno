import NavBar from "../../components/NavBar/NavBar";
import "./PaginaSobre.css"

export default function PaginaSobre() {
    return (
        <div>
            <NavBar />
            <div className="aboutContent">
                <img src="https://s.zst.com.br/cms-assets/2022/01/regras-do-uno-capa.webp"/>
                <div className="aboutText">
                    <h1>História de UNO</h1>
                    <p>Lançado em 1971, UNO é um jogo que fez parte da vida de muitas pessoas ao redor do mundo, contabilizando mais de 150 milhões de cópias em mais de 80 países. </p>
                    <h2>Surgimento</h2>
                    <p>O surgimento do jogo é bastante curiosa: ele surgiu de uma briga dentro da família do barbeiro Merle Robbins. Eles estavam jogando o jogo "Oito Maluco" e tiveram discordâncias quanto às regras, e Merle, para apaziguar a situação, criou um novo baralho baseado em "Oito Maluco". A família gostou do novo modelo e logo viu uma oportunidade de lucrar com a invenção, a qual logo viria a ser chamada de "UNO".</p>
                    <h2>Popularização</h2>
                    <div className="popularizacao">
                        <p>Até 1977, tudo era meio artesenal, e as cartas eram feitas à mão. Foi quando a gigante Mattel adquiriu os direitos de produção e distribuição do jogo, levando-o para o resto do mundo.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Mattel_logo.svg" />
                    </div>
                    <h2>Variações</h2>
                    <p>Como parte de sua longevidade ao longo desses mais de 50 anos, UNO conta com uma enorme quantidade de variações. Veja a seguir algumas delas.</p>
                </div>

            </div>


        </div>
    )
}