import NavBar from "../../components/NavBar/NavBar";
import "./PaginaSobre.css"

export default function PaginaSobre() {
    return (
        <div>
            <NavBar />
            <div className="aboutContent">
                <img src="https://s.zst.com.br/cms-assets/2022/01/regras-do-uno-capa.webp" alt=""/>
            </div>
            <p>Lançado em 1971, UNO é um jogo que fez parte da vida de muitas pessoas ao redor do mundo, contabilizando mais de 150 milhões de cópias em mais de 80 países. </p>
            <p>A história do jogo é bastante curiosa: ele surgiu de uma briga dentro da família do barbeiro Merle Robbins. Eles estavam jogando o jogo "Oito Maluco" e tiveram discordâncias quanto às regras, e Merle, para apaziguar a situação, criou um novo baralho baseado em "Oito Maluco". A família gostou do novo modelo e logo viu uma oportunidade de lucrar com a invenção, a qual logo viria a ser chamada de "UNO".</p>
            <p>UNO tornou-se, então, uma das marcas mais bem-sucedidas dos EUA e coleciona variações quanto ao estilo de jogo, indo desde o virtual até um modelo de empilar blocos numa torre.</p>    
            
        </div>
    )
}