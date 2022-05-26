import React, { useState, useEffect } from "react";
import css from "../styles/watchlistItems.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import publicUrl from '../utils/publicUrl';

export default function watchlistItems(props) {
  const { item } = props;
  console.log(item);

  const platform = item.location_image.map((a) => <img src={publicUrl(a)} />);
  const date = new Date(item.datetime);

  return (
    <div className={css.watchlistItem}>
      <ul className={css.type}>
        <li id={css.mediaName}>{item.name}</li>
        <li> {item.type}</li>
      </ul>
      <div className={css.platform}>{platform}</div>
      <p className={css.date}>Added: {date.toLocaleDateString()}</p>
    </div>
  );
}
