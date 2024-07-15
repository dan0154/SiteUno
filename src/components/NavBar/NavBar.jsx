import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar(currentPage) {
    return (
        <nav className="NavBar">
            <img src="https://cdn.freelogovectors.net/wp-content/uploads/2022/03/uno-logo_freelogovectors.net_.png" alt="Uno logo" />
            <menu className="NavList">
                <li><Link to={"/"}>Página Inicial</Link></li>
                <li><Link to={"/comojogar"}>Como Jogar</Link></li>
                <li><Link to={"/regras"}>Regras</Link></li>
                <li><Link to={"/sobre"}>Sobre</Link></li>
            </menu>
        </nav>

    )
}