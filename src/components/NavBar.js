import React from "react";
import Cart from "./CartWidget";



const NavBar = () => {
    return(
        <div>
            <nav id="Navigation">
                <h1 id="Logo"> GameShop</h1>
                <a href="monitores" id="link" >Monitores</a>
                <a href="perifericos" id="link">Perifericos</a>
                <a href="notebooks" id="link">Notebooks</a>
                <Cart/>
            </nav>
        </div>
    );
}

export default NavBar