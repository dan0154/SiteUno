import NavBar from "../../components/NavBar/NavBar";
import "./PaginaSobre.css"
import VariacaoUno from "./VariacaoUno/VariacaoUno";

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
                    <p>Como parte de sua longevidade ao longo desses mais de 50 anos, UNO conta com uma enorme quantidade de variações e parcerias. Veja a seguir algumas delas.</p>
                    <VariacaoUno imagem={"https://images.mattel.net/image/upload/w_720,c_scale/shop-us-prod/files/ujrclqqxjqbg4gkrmwax_56474f55-7e7d-4650-bdc8-5e4fa7d1590f.png"} titulo={"UNO Show'em no Mercy"} texto={"UNO Show 'em No Mercy é a versão mais implacável do clássico UNO! Com penalidades, regras inovadoras e a chance de eliminar todos os adversários, este jogo oferece uma experiência intensa. Ganhe livrando-se de todas as cartas ou derrotando os oponentes"}/>
                    <VariacaoUno imagem={"https://images.mattel.net/image/upload/w_720,c_scale/shop-us-prod/files/n7lscejnceunrwkyvmsi_89dfd859-2673-48df-937e-004873575f70.jpg"} titulo={"UNO Friends"} texto={'O jogo UNO reúne amigos com um baralho inspirado no programa de televisão Friends que apresenta os personagens favoritos da série. Os jogadores ainda tentam combinar cores e números e vão querer tirar a carta "Aquele em que você compra" com uma regra especial que fará com que os oponentes saquem até encontrarem o amigo certo. Quando a última carta estiver acabando, os jogadores não dizem "Vem sempre aqui?", eles gritam "UNO!" É um ótimo presente para os fãs de Friends'}/>
                    <VariacaoUno imagem={"https://images.mattel.net/image/upload/w_720,c_scale/shop-us-prod/files/cesktr9skpzxp6op2ght_5469d06c-2398-492d-9e06-8cf59ec2b8b2.jpg"} titulo={"UNO Stacko"} texto={'UNO Stacko combina a habilidade de empilhar com a diversão do UNO. Oferece entretenimento familiar com comandos nos blocos: montar por cor ou número e retirá-los por comando. A dinâmica é evitar que a torre caia, proporcionando uma prova à medida que a pilha aumenta'}/>
                </div>

            </div>


        </div>
    )
}