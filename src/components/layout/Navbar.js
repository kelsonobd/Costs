import { Link } from "react-router-dom"

import Container from "./Container"

import Styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {

    return (
        <nav class={Styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul class={Styles.list}>
                    <li class={Styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li class={Styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li class={Styles.item}>
                        <Link to="/Company">Empresa</Link>
                    </li>
                    <li class={Styles.item}>
                        <Link to="/Contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar