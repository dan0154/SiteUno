import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar(currentPage) {
    const handleMenuClick = () =>  {
        const navList = document.getElementById("NavList")
        navList.classList.toggle("open") ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }

    const handleLinkClick = () => {
        const navList = document.getElementById("NavList")
        if(document.querySelector('body').clientWidth <= 800){
            navList.classList.toggle("open") ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
        }
        
    }
    return (
        <nav className="NavBar">
            <div className="NavBarTop">
                <img src="https://cdn.freelogovectors.net/wp-content/uploads/2022/03/uno-logo_freelogovectors.net_.png" alt="Uno logo" />
                <div className="mobile-menu" onClick={handleMenuClick}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
            <menu id="NavList">
                <li className="li1" onClick={handleLinkClick}><Link to={"/"}>Página Inicial</Link></li>
                <li className="li2" onClick={handleLinkClick}><Link to={"/comojogar"}>Como Jogar</Link></li>
                <li className="li3" onClick={handleLinkClick}><Link to={"/regras"}>Regras</Link></li>
                <li className="li4" onClick={handleLinkClick}><Link to={"/sobre"}>Sobre</Link></li>
            </menu>
        </nav>

    )
}