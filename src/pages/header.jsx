import React from 'react';
import css from '../styles/header.module.css';

//react-router-dom
import { Link } from "react-router-dom";


//icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
    const { currentUserId } = props;

    //I'm going to split this into a few parts

    return (
        <header className={css.header}>

            <div className={css.headerItem} >
                <Link to="/">
                    <h2>WatchedIt?</h2>
                </Link>
            </div>
            <div className={css.headerItem}>
                <Link to={"watchlist/" + currentUserId}>
                    <FontAwesomeIcon icon="fa-solid fa-tv" size="lg" />
                </Link>
            </div>
            <div className={css.headerItem}>
                <Link to={"playlist/" + currentUserId}>
                    <FontAwesomeIcon icon="fa-solid fa-music" size="lg" />
                </Link>
            </div>
            <div className={css.headerItem}>

                    <FontAwesomeIcon icon="fa-solid fa-gear" size="lg" />
            </div>
        </header>
)
}

export default Header;