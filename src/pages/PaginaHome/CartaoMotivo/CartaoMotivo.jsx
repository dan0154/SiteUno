import "./CartaoMotivo.css"

export default function CartaoMotivo({ titulo, texto, img }) {
    return (
        <div className="cartaoMotivo">
            <div className="headerMotivo">
                <img src={img} />
                <h3>{titulo}</h3>
            </div>

            <p>{texto}</p>
        </div>
    )
}