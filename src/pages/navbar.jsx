import * as React from "react";
//react-router-dom
import { Link } from "react-router-dom";

//css
import css from "../styles/navbar.module.css";

//icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar(props) {
  const { currentUserId } = props;

  return (
    <nav className={css.navbar}>
      <div className={css.navitem}>
        <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-house" size="lg" color="#FFFFFF"/>
        </Link>
      </div>
      <div className={css.navitem}>
        <Link to="search">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" color="#FFFFFF"/>
        </Link>
      </div>
      <div className={css.navitem}>
        <Link to={"profile/" + currentUserId}>
          <FontAwesomeIcon icon="fa-solid fa-user" size="lg" color="#FFFFFF"/>
        </Link>
      </div>
    </nav>
  );
}
