import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <ul className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/novedades">Novedades</a></li>
            <li><a href="/trabajos">Trabajos Realizados</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <CartWidget />
        </ul>
    );
}

export default NavBar;
