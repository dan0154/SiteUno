import "./VariacaoUno.css"

export default function VariacaoUno({ imagem, titulo, texto, ladoImagem }) {
    return (
        <div className="variacao">
            <img src={imagem} />
            <div className="variacaoTexto">
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>

        </div>
    )
}