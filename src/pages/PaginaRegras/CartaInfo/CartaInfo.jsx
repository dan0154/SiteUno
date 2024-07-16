import "./CartaInfo.css"

export default function CartaInfo({img, nome, texto}){
    return(
        <div className="carta">
            <img src={img}/>
            <h2>{nome}</h2>
            <p>{texto}</p>
        </div>
    )
}