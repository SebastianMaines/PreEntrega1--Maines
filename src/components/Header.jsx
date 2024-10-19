import React from 'react';
import NavBar from "./NavBar";
import Title from "./Title";



function Header() {

    return (
        <header>
            <nav className="nav-wrapper red lighten-2">
                <div className="container">
                    {/* Título alineado a la izquierda */}
                    <Title />
                    {/* Menú alineado a la derecha */}
                    <NavBar />
                </div>
            </nav>
        </header>


    )
}

export default Header