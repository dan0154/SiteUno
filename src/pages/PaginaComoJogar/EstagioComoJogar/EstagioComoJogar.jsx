import "./EstagioComoJogar.css"

export default function EstagioComoJogar({numero, texto, imagem}){
    return(
        <div className="estagioComoJogar">
            <img src={imagem} />
            <h2>{numero}</h2>
            <p>{texto}</p>
        </div>
    )
}