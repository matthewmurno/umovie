import React from 'react';
import css from '../styles/header.module.css';

//react-router-dom
import { Link } from "react-router-dom";


//icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
    const { currentUserId } = props;

    return (
        <header className={css.header}>
            <div className={css.headerItem}>
                <button>
                    <h2>WatchedIt?</h2>
                </button>
            </div>
            <div className={css.headerItem}>
                <Link to={"watchlist/" + currentUserId}>
                    <FontAwesomeIcon icon="fa-solid fa-tv" size="lg" />
                </Link>
            </div>
            <div className={css.headerItem}>

                    <FontAwesomeIcon icon="fa-solid fa-music" size="lg" />
            </div>
            <div className={css.headerItem}>

                    <FontAwesomeIcon icon="fa-solid fa-gear" size="lg" />
            </div>
        </header>
)
}

export default Header;