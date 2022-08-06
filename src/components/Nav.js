import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = (props) =>{
    return(
        <nav>
            <h1>
                <a href="https://open.spotify.com/artist/2i66H6Y7BoIctXC5Dfqp2Z" target="_blank" rel="noreferrer">~ ♪ July ♫ ~</a>
            </h1>
            <button onClick={() => props.setLibraryStatus(!props.libraryStatus)}>
                Library 
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav;